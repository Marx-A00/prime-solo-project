import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Keyboard from "../Keyboard/Keyboard";
import ChangeColorPresetButton from "../ChangeColorPresetButton/ChangeColorPresetButton";
import ADSR from "../ADSR/ADSR";
import Draggable from "react-draggable";
import ChangeKeyboardColors from "../ChangeKeyboardColorsButton/ChangeKeyboardColorsButton";
import { useEffect } from "react";

export default function Audio() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const appState = useSelector((store) => store.AudioReducer1);

  useEffect(() => {
    dispatch({
      type: "SAGA/FETCH_USER_DETAILS",
      payload: { id: user.id },
    });
  }, [dispatch]);

  // const getUserDetails = () =>{
  //   dispatch({
  //     type: "SAGA/FETCH_USER_DETAILS",
  //     payload: {id: user.id}
  //   });

  // }

  // Setter for User audio Details (Osc)
  const handlePresetDetails = () => {
    dispatch({
      type: "SAGA/SET_USER_AUDIO_DETAILS",
      payload: {
        id: user.id,
        data: appState,
      },
    });
  };

  const changeStyle = () => {
    if (style !== "red") {
      console.log("blue");
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
     * TODO:
     * Make Windows Resizable
     *
     * FIXME:
     * google this error:
     * findDOMNode was passed an instance of Draggable which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
     *
     *
     */

    <div className="audio">
      <button onClick={handlePresetDetails}>Save Current Presets</button>
      <ChangeColorPresetButton />
      <h1>btw this is you: {user.username}</h1>
      <h1>this might also be your presets: {user.presets}</h1>
      <h1> aaand this might even be your colorSchemes: {user.color_Scheme}</h1>

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
      <Draggable>
        <div className="keyboardBox">
          <div className="handle">

          </div>
          <button>hi</button>
          <button>hi</button>

        <div className="drag">
          <Keyboard />
        </div>
        </div>
      </Draggable>
    </div>
  );
}
