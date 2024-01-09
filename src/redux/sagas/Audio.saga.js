import axios from "axios";
import { put,takeLatest } from "redux-saga/effects";

function* fetchAudioDetails(action){
    try{
        const response = yield axios.get(`/api/user/${action.id}}`)

        yield put({
            /**
             * TODO:
             * write SET_AUDIO_DETAILS in audio reducer
             */
            type:"SET_AUDIO_DETAILS"
        })
    }
    catch(error){
        console.log('Fetch Audio Details error:', error)
    }
}