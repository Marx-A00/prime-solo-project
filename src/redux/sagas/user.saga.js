import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

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
function* fetchUserAudioDetails(action){
  console.log('action.payload:', action.payload)

  const response = yield axios({
    method: "GET",
    url: `/api/user`,
    data: action.payload
  })


}

function* setUserAudioDetails(action) {
  console.log('action.payload:', action.payload)
  const userid = action.payload.id;
  const userData = action.payload.data;
  try {
    const response = yield axios({
      method: "POST",
      url: `/api/presets`,
      data: action.payload,
    });

    yield fetchUser();
  } catch (error) {
    console.log("error when posting user Audio Data", error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("SAGA/FETCH_USER_DETAILS", fetchUserAudioDetails);

  yield takeLatest("SAGA/SET_USER_AUDIO_DETAILS", setUserAudioDetails);
}

export default userSaga;
