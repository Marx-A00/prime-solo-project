import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PresetsList() {
  const [state, setState] = useState();

  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.userAudioDetailsReducer);
  const userAudioSettings = userDetails.audioSettings;
  console.log("userAudioSettings:", userAudioSettings);

  const handlePresetDelete = (itemId) => {
    dispatch({
      type: "SAGA/DELETE_PRESET",
      payload: itemId,
    });
  };

  return (
    <div>
      <h2>User Details</h2>
      <ul>
        {userAudioSettings &&
          userAudioSettings.map((detail) => (
            <li key={detail.id}>
              <ul>
                <li>Detune: {detail.osc1_detune}</li>
                <li>Type: {detail.osc1_type}</li>
                <br></br>
                <li>Filter Frequency: {detail.filter_frequency}</li>
                <li>Filter Detune: {detail.filter_detune}</li>
                <li>Filter Q: {detail.filter_Q}</li>
                <li>Filter Gain: {detail.filter_gain}</li>
                <li>Filter type: {detail.filter_type}</li>
                <br></br>
                <li>Envelope Attack: {detail.envelope_attack}</li>
                <li>Envelope Decay: {detail.envelope_decay}</li>
                <li>Envelope Sustain: {detail.envelope_sustain}</li>
                <li>Envelope release: {detail.envelope_release}</li>
                <br></br>
                <button onClick={() => handlePresetDelete(detail.id)}>
                  Delete Preset
                </button>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
