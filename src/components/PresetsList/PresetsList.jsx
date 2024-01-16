import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './PresetsList.css'

export default function PresetsList() {
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
      <table className="table-presets">
        <thead>
          <tr>
            <th>Detune</th>
            <th>Type</th>
            <th>Filter Frequency</th>
            <th>Filter Detune</th>
            <th>Filter Q</th>
            <th>Filter Gain</th>
            <th>Filter Type</th>
            <th>Envelope Attack</th>
            <th>Envelope Decay</th>
            <th>Envelope Sustain</th>
            <th>Envelope Release</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userAudioSettings &&
            userAudioSettings.map((detail) => (
              <tr key={detail.id}>
                <td>{detail.osc1_detune}</td>
                <td>{detail.osc1_type}</td>
                <td>{detail.filter_frequency}</td>
                <td>{detail.filter_detune}</td>
                <td>{detail.filter_Q}</td>
                <td>{detail.filter_gain}</td>
                <td>{detail.filter_type}</td>
                <td>{detail.envelope_attack}</td>
                <td>{detail.envelope_decay}</td>
                <td>{detail.envelope_sustain}</td>
                <td>{detail.envelope_release}</td>

                <td>
                  <button onClick={() => handlePresetDelete(detail.id)}>
                    Delete Preset
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <ul>
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
      </ul> */}
    </div>
  );
}
