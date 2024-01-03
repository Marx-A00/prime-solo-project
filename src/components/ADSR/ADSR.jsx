import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ADSR = () => {
  const appState = useSelector((store) => store.AudioReducer1);
  const dispatch = useDispatch();

  const change = (e) => {
    dispatch({ type: "CHANGE_ADSR", payload: { id, value } });
  };
  return (
    <div className="control">
      <h2>ADSR</h2>
      <div className="param">
        <h3>attack</h3>
        <input type="range" id="attack" onChange={change} max="2" step="0.02" />
      </div>
      <div className="param">
        <h3>decay</h3>
        <input type="range" id="decay" onChange={change} max="1" step="0.01" />
      </div>
      <div className="param">
        <h3>sustain</h3>
        <input
          type="range"
          id="sustain"
          onChange={change}
          max="1"
          step="0.01"
        />
      </div>
      <div className="param">
        <h3>release</h3>
        <input
          type="range"
          id="release"
          onChange={change}
          max="2"
          step="0.02"
        />
      </div>
    </div>
  );
};

export default ADSR;
