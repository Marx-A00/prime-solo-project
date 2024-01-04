import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Filter from "../Filter/Filter";
import { useSelector} from "react-redux";
import * as React from "react";
import Keyboard from "../Keyboard/Keyboard";
import ChangeColorPresetButton from "../ChangeColorPresetButton/ChangeColorPresetButton";
import ADSR from "../ADSR/ADSR";

export default function Audio() {
  const appState = useSelector((store) => store.AudioReducer1);

  const changeStyle = () => {
    if (style !== "red") {
      document.body.style.backgroundColor = "red";
      setStyle("red");
    } else {
      document.body.style.backgroundColor = "blue";
      setStyle("blue");
    }
  };

  return (
    <div className="audio">
      <ChangeColorPresetButton />
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}
