import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import * as React from "react";
import Keyboard from "../Keyboard/Keyboard";
import ChangeColorPresetButton from "../ChangeColorPresetButton/ChangeColorPresetButton";
import ADSR from "../ADSR/ADSR";
import Draggable from "react-draggable";
import ChangeKeyboardColors from "../ChangeKeyboardColorsButton/ChangeKeyboardColorsButton";

export default function Audio() {

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
    /**
     * FIXME:
     * Make windows not draggable by param bars
     * FIXME:
     * Make control divs only draggable by touching the exact div
     *
     * 
     */
    
    <div className="audio">
      <ChangeColorPresetButton />

      <ChangeKeyboardColors />

      <Draggable>
        <div className="drag">
          <Osc1 />
        </div>
      </Draggable>

      <Draggable>
        <div className="drag">
          <ADSR />
        </div>
      </Draggable>

      <Draggable>
        <div className="drag">
          <Filter />
        </div>
      </Draggable>

      <Keyboard />
    </div>
  );
}
