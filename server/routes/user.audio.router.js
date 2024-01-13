const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
/**
 * This router file will contain a different post route that
 * posts new user data Ex: presets, color_Scheme
 */

// router.get("/:id", (req, res) => {
//   console.log('req:', req);
//   /**
//    * TODO:
//    * Make sure ID is consistent in both reducer and
//    * server route
//    */

//   const idOfUser = req.params.id;
//   const query = `
// SELECT * FROM "user"
//     WHERE "id" = ${idOfUser};
// `;
//   pool
//     .query(query)
//     .then((result) => {
//       const userDetails = result.rows;
//       console.log(userDetails);
//       res.send(userDetails);
//     })
//     .catch((err) => {
//       console.log("ERROR: Get all Users along with user details", err);
//       res.sendStatus(500);
//     });
// });

/**
 * POSTs preset data, ColorScheme data etc.
 */

router.post("/", (req, res) => {
  const audioDataFromUser = req.body.data;
  console.log(audioDataFromUser);
  const idOfUser = req.body.id;
  const dataForPresetsQuery = `
  INSERT INTO "presets"(
  "osc1_detune",
  "osc1_type",
  "filter_frequency",
  "filter_detune",
  "filter_Q",
  "filter_gain",
  "filter_type",
  "envelope_attack",
  "envelope_decay",
  "envelope_sustain",
  "envelope_release"
)
  VALUES
  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
  `;
  const sqlValues = [
    audioDataFromUser.osc1Settings.detune,
    audioDataFromUser.osc1Settings.type,
    audioDataFromUser.filterSettings.frequency,
    audioDataFromUser.filterSettings.detune,
    audioDataFromUser.filterSettings.Q,
    audioDataFromUser.filterSettings.gain,
    audioDataFromUser.filterSettings.type,
    audioDataFromUser.envelope.attack,
    audioDataFromUser.envelope.decay,
    audioDataFromUser.envelope.sustain,
    audioDataFromUser.envelope.release,
  ];


  pool
    .query(dataForPresetsQuery, sqlValues)
    .then((dbResult) => {
      res.sendStatus(201);
    })
    .catch((er) => {
      console.log("error in PRESET POST", er);
    });
});

module.exports = router;
