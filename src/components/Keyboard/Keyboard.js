import { useDispatch, useSelector } from "react-redux";
import QwertyHancock from "qwerty-hancock";
import { useEffect } from "react";
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

/**
 * TODO:
 * last thing I did was comment out everything in the store,
 * Now the plan is to make a keyboard component within this file
 * similar to one on YT video (QWERTY Hancock),
 * and then try to get MAKE_OSC working and then get the
 * reducer working one by one.
 *
 * Make sure reducer is properly set up, try to use chatGPT if needed
 * don't forget to set context and corresponding data in the
 * beginning of reducer file
 *
 * Still need to handle payload stuff in audio file as well
 */
