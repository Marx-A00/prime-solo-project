import Osc from "../../classes/Osc";
import { combineReducers } from "redux";

// perhaps find way to NOT rely on new Oscillator

let actx = new AudioContext();
let out = actx.destination;

let gain1 = actx.createGain();
gain1.gain.value = 0.2;
let filter = actx.createBiquadFilter();
// research biquadfilter later

gain1.connect(filter);
filter.connect(out);

//Preliminary audio set up 👆

const initialOsc1State = {
  osc1Settings: {
    detune: 0,
    type: "sine",
  },
  filterSettings: {
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.6,
    release: 0.1,
  },
};

let nodes = [];

const audioReducer = (state = initialOsc1State, action) => {
  /**
   * TODO:
   * Create an action that stores all of the data and goes to SAGA
   */
  let { id, value, note, freq } = action.payload || {};
  switch (action.type) {
    case "MAKE_OSC":
      const newOsc = new Osc(
        actx,
        state.osc1Settings.type,
        freq,
        state.osc1Settings.detune,
        state.envelope,
        gain1
      );
      nodes.push(newOsc);

      return { ...state };
    case "KILL_OSC":
      let newNodes = [];
      nodes.forEach((node) => {
        console.log(node);
        if (Math.round(node.osc.frequency.value) === Math.round(freq)) {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
      return { ...state };
    case "CHANGE_OSC1":
      return { ...state, osc1Settings: { ...state.osc1Settings, [id]: value } };
    case "CHANGE_OSC1_TYPE":
      return { ...state, osc1Settings: { ...state.osc1Settings, type: id } };
    case "CHANGE_FILTER":
      filter[id].value = value;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, [id]: value },
      };
    case "CHANGE_FILTER_TYPE":
      filter.type = id;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, type: id },
      };
    case "CHANGE_ADSR":
      return { ...state, envelope: { ...state.envelope, [id]: Number(value) } };
    default:
      console.log("reducer error. action: ", action);
      return { ...state };
  }
};
export default audioReducer;
