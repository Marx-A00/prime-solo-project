const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// have to figure out authorized user
router.get("/", (req, res) => {
  const userid = req.user.id;
  const queryText = `
    SELECT p.*
	FROM presets p
	JOIN users_presets up ON p.id = up.preset_id
	WHERE up."presetUserOwnerId" = ${userid};	

    `;
  pool
    .query(queryText)
    .then((result) => {
      console.log("result.rows:", result.rows);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  console.log("req.body:", req.params);

  // will have to delete presets from users_presets first, then delete actual
  // presets
});

module.exports = router;
