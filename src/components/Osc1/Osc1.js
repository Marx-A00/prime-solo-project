import React from "react";
import { useSelector, useDispatch } from "react-redux";

// change
const Osc1 = ({change,settings,changeType}) => {
  // const appState = useSelector((store) => store.AudioReducer1);
  let { type, frequency, detune } = settings;


  // const change = (e) => {
  //   let { id, value } = e.target;
  //   dispatch({
  //     type: "CHANGE_OSC1",
  //     payload: { id, value },
  //   });

    // const changeType = (e) => {
    //   let { id } = e.target;
    //   dispatch({
    //     type: "CHANGE_OSC1_TYPE",
    //     payload: { id },
    //   });
    // };
  
  return (
    <div className="control">
      <h2>Osc 1</h2>
      <div className="param">
        <h3>frequency</h3>
        <input
          value={frequency}
          onChange={change}
          max="5000"
          type="range"
          id="frequency"
        />
      </div>

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
  );
};
export default Osc1;
