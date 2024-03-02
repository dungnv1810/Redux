import {
    GET_COUNTRIES_REQUEST,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAILED,

    GET_COUNTRY_BY_NAME_REQUEST,
    GET_COUNTRY_BY_NAME_SUCCESS,
    GET_COUNTRY_BY_NAME_FAILED,

    GET_COUNTRIES_BY_REGION_REQUEST,
    GET_COUNTRIES_BY_REGION_SUCCESS,
    GET_COUNTRIES_BY_REGION_FAILED,

    GET_COUNTRIES_BY_NAME_REQUEST,
    GET_COUNTRIES_BY_NAME_SUCCESS,
    GET_COUNTRIES_BY_NAME_FAILED,
} from "./Constants"

const CountriesReducerInnitialState = {
    countries: [],
    country: null,
    isLoading: false,
    error: {}
}
const CountriesReducer = (state = CountriesReducerInnitialState, action) => {
    switch(action.type){
        case GET_COUNTRIES_REQUEST:{
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_COUNTRIES_SUCCESS:{
            const data = action.payload
            return{
                ...state,
                countries: data,
                isLoading: false
            }
        }
        case GET_COUNTRIES_FAILED:{
            return{
                ...state,
                isLoading: false
            }
        }

        case GET_COUNTRY_BY_NAME_REQUEST: {
            return state
        }
        case GET_COUNTRY_BY_NAME_SUCCESS: {
            return{
                ...state,
                country: action.payload
            }
        }
        case GET_COUNTRY_BY_NAME_FAILED: {
            return state
        }
        
        case GET_COUNTRIES_BY_REGION_REQUEST: {
            return state
        }
        case GET_COUNTRIES_BY_REGION_SUCCESS:{
            return{
                ...state,
                countries: action.payload
            }
        }
        case GET_COUNTRIES_BY_REGION_FAILED: {
            return state
        }
        
        case GET_COUNTRIES_BY_NAME_REQUEST: {
            return state
        }
        case GET_COUNTRIES_BY_NAME_SUCCESS: {
            return{
                ...state,
                countries: action.payload
            }
        }
        case GET_COUNTRIES_BY_NAME_FAILED: {
            return state
        }

        default:
            return state
    }
}
export default CountriesReducer