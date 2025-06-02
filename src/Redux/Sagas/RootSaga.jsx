import { all } from "redux-saga/effects";

import feedbackSagas from"./FeedbackSagas"
export default function* RootSaga(){
    yield all([
        
        feedbackSagas()
    ])
}
