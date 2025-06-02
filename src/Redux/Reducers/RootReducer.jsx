import { combineReducers } from "@reduxjs/toolkit"
import FeedbackReducer from "./FeedbackReducer"
export default combineReducers({
    FeedbackStateData: FeedbackReducer,
   
})