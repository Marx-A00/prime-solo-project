const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("req.user.id:", req.user.id);

  const userid = req.user.id;

  const queryText = `
    SELECT cs.*
        FROM color_schemes cs
        JOIN users_color_schemes ucs ON cs.id = ucs."colorSchemeId"
        WHERE ucs."colorSchemeOwnerId" = ${userid};
    `;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post("/", async (req, res) => {
  let connection;

  try {
    const colorSchemeDataFromUser = req.body.data;
    console.log("colorSchemeDataFromUser:", colorSchemeDataFromUser);
    const idOfUser = req.user.id;
    console.log("idOfUser:", idOfUser);

    connection = await pool.connect();

    connection.query("BEGIN;");

    const dataForColorsQuery = `
        INSERT INTO "color_schemes"(
            "whiteKeyColor",
            "blackKeyColor",
            "activeKeyColor",
            "color_scheme_name"
        )
        VALUES
        ($1,$2,$3,$4)
        RETURNING id
        `;
    const sqlValues = [
      colorSchemeDataFromUser.whiteKeyColor,
      colorSchemeDataFromUser.blackKeyColor,
      colorSchemeDataFromUser.activeKeyColor,
      colorSchemeDataFromUser.colorSchemeName,
    ];

    const colorsResponse = await connection.query(
      dataForColorsQuery,
      sqlValues
    );
    const createdColorSchemeId = colorsResponse.rows[0].id;

    const usersColorSchemesQuery = `
    INSERT INTO "users_color_schemes"("colorSchemeOwnerId","colorSchemeId")
    VALUES
    ($1,$2)
    `;
    const usersColorSchemesValues = [idOfUser, createdColorSchemeId];
    await connection.query(usersColorSchemesQuery, usersColorSchemesValues);

    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("error:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  let connection;
  try {
    const idOfColorScheme = req.params.id;
    connection = await pool.connect();

    connection.query("BEGIN;");

    const sqlQuery = `
    DELETE FROM "color_schemes"
    WHERE "id" = ${idOfColorScheme};
    `;
    const colorsResponse = await connection.query(sqlQuery);

    const usersColorSchemesQuery = `
    DELETE FROM "users_color_schemes"
    WHERE "colorSchemeId" = ${idOfColorScheme};
    `;
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("error in post route", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

module.exports = router;
