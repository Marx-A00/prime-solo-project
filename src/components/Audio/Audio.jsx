import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Filter from "../Filter/Filter";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";


// let actx = new AudioContext();
// let out = actx.destination;

// let osc1 = actx.createOscillator();
// let gain1 = actx.createGain();
// let filter = actx.createBiquadFilter();
// // research biquadfilter later

// osc1.connect(gain1);
// gain1.connect(filter);
// filter.connect(out);
// research biquadfilter later

//Preliminary audio set up 👆
//-----------------------------------------------------------------------------------
export default function Audio() {
  // state setup
//   const [osc1Settings, setOsc1Settings] = useState({
//     frequency: osc1.frequency.value,
//     detune: osc1.detune.value,
//     type: osc1.type,
//   });

//   const [filterSettings, setFilterSettings] = useState({
//     frequency: filter.frequency.value,
//     detune: filter.detune.value,
//     Q: filter.Q.value,
//     gain: filter.gain.value,
//     type: filter.type,
//   });



//   const changeOsc1 = (e) => {
//     let { value, id } = e.target;
//     setOsc1Settings({ ...osc1Settings, [id]: value });
//     osc1[id].value = value;
//   };

//   const changeOsc1Type = (e) => {
//     let { id } = e.target;
//     setOsc1Settings({ ...osc1Settings, type: id });
//     osc1.type = id;
//     console.log(id);
//   };

//   const changeFilter = (e) => {
//     let { value, id } = e.target;
//     setFilterSettings({ ...filterSettings, [id]: value });
//     filter[id].value = value;
//   };

//   const changeFilterType = (e) => {
//     let { id } = e.target;
//     setFilterSettings({ ...filterSettings, type: [id] });
//     filter.type = id;
//   };

  // needs to run in parent component, may need to move it out
  // maybe it will work if I do it in child components

  return (
    <div className="audio">
      <h1 className="center">Sliders</h1>
      <div className="center">
        <button onClick={() => dispatch({type: "START_OSC"})}>Start</button>
        <button onClick={() => dispatch({type: "STOP_OSC"})}>Stop</button>
      </div>
      <Osc1
        // change={changeOsc1}
        // settings={osc1Settings}
        // changeType={changeOsc1Type}
      />
      <Filter
        // change={changeFilter}
        // settings={filterSettings}
        // changeType={changeFilterType}
      />
    </div>
  );
}
