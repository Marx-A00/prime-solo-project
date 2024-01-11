const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
/**
 * This router file will contain a different post route that
 * posts new user data Ex: presets, color_Scheme
 */

router.get("/:id", (req, res) => {
  /**
   * TODO:
   * Make sure ID is consistent in both reducer and
   * server route
   */

  const idOfUser = req.params.id;
  const query = `
SELECT * FROM "user"
    WHERE "id" = ${idOfUser};
`;
  pool
    .query(query)
    .then((result) => {
      const userDetails = result.rows;
      console.log(userDetails);
      res.send(userDetails);
    })
    .catch((err) => {
      console.log("ERROR: Get all Users along with user details", err);
      res.sendStatus(500);
    });
});

/**
 * POSTs preset data, ColorScheme data etc.
 */

router.post("/:id", (req, res) => {
  const idOfUser = req.params;
  const dataFromUser = req.body;
  console.log(idOfUser);
  console.log(dataFromUser);
  const insertDetailsQuery = `
  INSERT INTO "user"
  ("presets","color_Scheme")
  VALUES
  ($1,$2)
  `;
});

module.exports = router;
