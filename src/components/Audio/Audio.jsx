import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Osc from "../../classes/Osc";
import QwertyHancock from "qwerty-hancock";


let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();
// research biquadfilter later

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);
// research biquadfilter later

//Preliminary audio set up 👆
//-----------------------------------------------------------------------------------
export default function Audio() {
  let nodes = [];
  useEffect(()=>{
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: "449",
      height: "70",
      octaves: 3,
      startNote: "C4",
    })
    keyboard.keyDown = (note,freq) =>{
      const newOsc = new Osc(actx,"sawtooth",freq,0,null,gain1);
      nodes.push(newOsc);
      console.log("nodes:",nodes)

    }

    keyboard.keyUp = (note,freq)=>{
      let newNodes = [];
      nodes.forEach(node =>{
        if(Math.round(node.osc.frequency.value) === Math.round(freq)){
          node.stop();
        }else{
          newNodes.push(node);
        }
      })
      nodes = newNodes;
    }

  },[])
  // state setup

  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });



  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    console.log(value);
    console.log(id);
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id });
    osc1.type = id;
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    filter.type = id;
    console.log(filter.type)
  };

  // needs to run in parent component, may need to move it out
  // maybe it will work if I do it in child components

  return (
    <div className="audio">
      <h1 className="center">Sliders</h1>
      <div className="center">
      </div>
      <Osc1
        change={changeOsc1}
        settings={osc1Settings}
        changeType={changeOsc1Type}
      />
      <Filter
        change={changeFilter}
        settings={filterSettings}
        changeType={changeFilterType}
      />
      <div>
        <div id="keyboard">
          <keyboard />

        </div>

      </div>
    </div>
  );
}
