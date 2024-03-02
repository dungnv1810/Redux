import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"
import rootSaga from "./Components/MainContent/Countries/saga"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
// then run the saga
sagaMiddleware.run(rootSaga)
export default store
