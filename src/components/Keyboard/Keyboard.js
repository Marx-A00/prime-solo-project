import { useDispatch, useSelector } from "react-redux";
import QwertyHancock from "qwerty-hancock";
import { useEffect } from "react";
import Draggable from "react-draggable";
const Keyboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: "449",
      height: "70",
      octaves: 2,
      startNote: "C4",
    });
    keyboard.keyDown = (note, freq) => {
      dispatch({ type: "MAKE_OSC", payload: { note, freq } });
    };

    keyboard.keyUp = (note, freq) => {
      dispatch({ type: "KILL_OSC", payload: { note, freq } });
    };
  }, []);

  return (
    <div className="keyboard">
      <div id="keyboard"></div>
    </div>
  );
};
export default Keyboard;
