const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// have to figure out authorized user
router.get("/", (req, res) => {
    console.log("req.body:", req.user.id);
    const userid = req.user.id
    const queryText = `SELECT * FROM "users_presets"
    WHERE "presetUserOwnerId" = ${userid};`;
  
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

  module.exports = router;
  