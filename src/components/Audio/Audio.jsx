import './Audio.css';
import Osc1 from '../Osc1/Osc1';
import {useState} from 'react'
let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);
export default function Audio() {
    const [osc1Freq,setOsc1Freq] = useState(osc1.frequency.value)

  const changeOsc1Freq = (e) =>{
    let {value} = e.target;
    setOsc1Freq(value);
    osc1.frequency.value = value;
  }

  // needs to run in parent component, may need to move it out
  // maybe it will work if I do it in child components

  return (
    <div className="audio">
      <h1>Sliders</h1>
      <button onClick={() => osc1.start()}>Start</button>
      <button onClick={() => osc1.stop()}>Stop</button>
      <Osc1 changeFreq={changeOsc1Freq} freq = {osc1Freq}/>
    
    </div>
  );
}
