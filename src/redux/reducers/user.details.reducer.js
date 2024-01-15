
const userAudioDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_DETAILS":
       return {audioSettings: action.payload}
    case "SET_USER_COLOR_DETAILS":
      return {...state, colorSettings: action.payload};
    default:
      return state;
  }
  /**
   * TODO: might have to change SET color details and set
   * audio details, with the spread operator inluded
   */
};
export default userAudioDetailsReducer;
