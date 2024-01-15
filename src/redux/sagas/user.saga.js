import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get("/api/user", config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: "SET_USER", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}
// responsible for getting Audio details : Oscillator details and color details
function* fetchUserAudioDetails() {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/presets`,
    });

    yield put({
      type: "SET_USER_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in fetchUserAudioDetails:", error);
  }
}

function* setUserAudioDetails(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: `/api/presets`,
      data: action.payload,
    });

    yield fetchUserAudioDetails();
  } catch (error) {
    console.log("error when posting user Audio Data", error);
  }
}

function* setUserColorDetails(action) {
  console.log("action.payload:", action.payload);
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/color_schemes",
      data: action.payload,
    });
    yield fetchUserColorDetails();
  } catch (error) {
    console.log("error:", error);
  }
}

function* fetchUserColorDetails() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/color_schemes",
    });

    yield put({
      type: "SET_USER_COLOR_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error when posting user color Data", error);
  }
}
function* deleteUserPreset(action) {
  console.log('action.payload', action.payload);
  const idOfPreset = action.payload;
  try {
    const response = yield axios({
      method: 'DELETE',
      url: `/api/presets/${idOfPreset}`,
    });
    yield fetchUserAudioDetails();
  } catch (error) {
    console.log("error in delete:", error);
  }
}

function* deleteUserColorSchemes(action){
  console.log('action.payload', action.payload);
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("SAGA/FETCH_USER_DETAILS", fetchUserAudioDetails);
  yield takeLatest("SAGA/SET_USER_AUDIO_DETAILS", setUserAudioDetails);
  yield takeLatest("SAGA/SET_USER_COLOR_DETAILS", setUserColorDetails);
  yield takeLatest("SAGA/FETCH_USER_COLOR_DETAILS", fetchUserColorDetails);
  yield takeLatest("SAGA/DELETE_PRESET", deleteUserPreset);
}

export default userSaga;
