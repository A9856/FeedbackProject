import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FEEDBACK, CREATE_FEEDBACK_RED, DELETE_FEEDBACK, DELETE_FEEDBACK_RED, GET_FEEDBACK, GET_FEEDBACK_RED, UPDATE_FEEDBACK, UPDATE_FEEDBACK_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateRecord, updateMultipartRecord } from "./Services/index"

function* createSaga(action) {               //worker Saga
    let response = yield createRecord("feedback", action.payload)
    yield put({ type: CREATE_FEEDBACK_RED, payload: response })

    // let response = yield createMultipartRecord("feedback", action.payload)
    // yield put({ type: CREATE_FEEDBACK_RED, payload: response })
}

function* getSaga() {               //worker Saga
    let response = yield getRecord("feedback")
    yield put({ type: GET_FEEDBACK_RED, payload: response })
}

function* updateSaga(action) {               //worker Saga
    yield updateRecord("feedback", action.payload)
    yield put({ type: UPDATE_FEEDBACK_RED, payload: action.payload })

    // yield updateMultipartRecord("feedback", action.payload)
    // yield put({ type: UPDATE_FEEDBACK_RED, payload: response })
}

function* deleteSaga(action) {               //worker Saga
    yield deleteRecord("feedback", action.payload)
    yield put({ type: DELETE_FEEDBACK_RED, payload: action.payload })
}

export default function* feedbackSagas() {
    yield takeEvery(CREATE_FEEDBACK, createSaga)        //watcher Saga
    yield takeEvery(GET_FEEDBACK, getSaga)              //watcher Saga
    yield takeEvery(UPDATE_FEEDBACK, updateSaga)        //watcher Saga
    yield takeEvery(DELETE_FEEDBACK, deleteSaga)        //watcher Saga
}