import QwertyHancock from "qwerty-hancock";
const keyboardReducer = (state = {}, action) => {
  switch (action.type) {
    case "MAKE_NEW_KEYBOARD_COLORS":
      const colorfulKeys = new QwertyHancock({
        id: "keyboard",
        width: "449",
        height: "70",
        octaves: 2,
        startNote: "C4",
        whiteKeyColour: "#fff",
        blackKeyColour: "#FF0",
        activeColour: "green",
      });
      return colorfulKeys;

    default:
      return state;
  }
};
export default keyboardReducer;
