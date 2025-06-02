import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import RootSaga from "./Sagas/RootSaga"
import RootReducer from "./Reducers/RootReducer"
const Saga=createSagaMiddleware()
const Store =configureStore({
    reducer:RootReducer,
    middleware:()=>[Saga]
})
Saga.run(RootSaga)
export default Store
