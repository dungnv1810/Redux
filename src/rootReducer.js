import {combineReducers} from "redux"
import CountriesReducer from "./Components/MainContent/Countries/Reducer"
const rootReducer = combineReducers({
    Countries: CountriesReducer,
})
export default rootReducer