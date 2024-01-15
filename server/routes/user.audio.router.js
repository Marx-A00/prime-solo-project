  const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// currently only posts presets and updates
// users_presets



// have to figure out authorized user 
router.get("/",(req,res)=>{
  console.log('req.body:', req.body);
  // const queryText = `SELECT * FROM "users_presets"
  // WHERE "presetUserOwnerId" = ${req.body.id};`


})
router.post("/", async (req, res) => {
  let connection;

  try {
    const audioDataFromUser = req.body.data;
    console.log(audioDataFromUser);
    const idOfUser = req.body.id;
    console.log('idOfUser:', idOfUser);

    connection = await pool.connect();

    connection.query("BEGIN;");
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
    RETURNING id
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

    const presetsResponse = await connection.query(
      dataForPresetsQuery,
      sqlValues
    );
    const createdPresetId = presetsResponse.rows[0].id;

    const usersPresetsQuery = `
    INSERT INTO "users_presets"("preset_id","presetUserOwnerId")
    VALUES
    ($1,$2)
    `;
    const usersPresetsValues = [createdPresetId, idOfUser];
    await connection.query(usersPresetsQuery, usersPresetsValues);

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
