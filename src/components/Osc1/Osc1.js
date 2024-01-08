import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";

const Osc1 = () => {
  const appState = useSelector((store) => store.AudioReducer1);
  const dispatch = useDispatch();
  let { type, detune } = appState.osc1Settings;

  const change = (e) => {
    let { id, value } = e.target;
    console.log("value from app: ", value);
    dispatch({ type: "CHANGE_OSC1", payload: { id, value } });
    console.log(
      "detune value of appState from redux: ",
      appState.osc1Settings.detune
    );
  };
  const changeType = (e) => {
    let { id } = e.target;
    dispatch({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  return (
    <div>
      <div id="Osc1" className="control">
        <h2>Osc 1</h2>

        <div className="param">
          <h3>Detune</h3>
          <input value={detune} onChange={change} type="range" id="detune" />
        </div>

        <div className="param">
          <h3>Wave</h3>
          <button
            id="sine"
            onClick={changeType}
            className={`${type === "sine" && "active"}`}
          >
            sine
          </button>
          <button
            id="triangle"
            onClick={changeType}
            className={`${type === "triangle" && "active"}`}
          >
            triangle
          </button>
          <button
            id="square"
            onClick={changeType}
            className={`${type === "square" && "active"}`}
          >
            square
          </button>
          <button
            id="sawtooth"
            onClick={changeType}
            className={`${type === "sawtooth" && "active"}`}
          >
            sawtooth
          </button>
        </div>
      </div>
    </div>
  );
};
export default Osc1;
