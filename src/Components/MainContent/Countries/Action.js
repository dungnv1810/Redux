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
} from './Constants'

export const getCountries = (payload) => {
    return{
        type: GET_COUNTRIES_REQUEST,
        payload: payload
    }
}
export const getCountriesSuccess = (payload) => {
    return{
        type: GET_COUNTRIES_SUCCESS,
        payload: payload
    }
}
export const getCountriesFailed = (payload) => {
    return{
        type: GET_COUNTRIES_FAILED,
        payload: payload
    }
}

export const getCountry = (payload) => {
    return{
        type: GET_COUNTRY_BY_NAME_REQUEST,
        payload: payload
    }
}
export const getCountrySuccess = (payload) => {
    return{
        type: GET_COUNTRY_BY_NAME_SUCCESS,
        payload: payload
    }
}
export const getCountryFailed = (payload) => {
    return{
        type: GET_COUNTRY_BY_NAME_FAILED,
        payload: payload
    }
}

export const getCountryByRegion = (payload) => {
    return{
        type: GET_COUNTRIES_BY_REGION_REQUEST,
        payload: payload
    }
}
export const getCountryByRegionSuccess = (payload) => {
    return{
        type: GET_COUNTRIES_BY_REGION_SUCCESS,
        payload: payload
    }
}

export const getCountryByRegionFailed = (payload) => {
    return{
        type: GET_COUNTRIES_BY_REGION_FAILED,
        payload: payload
    }
}



export const getCountriesByname = (payload) => {
    return{
        type: GET_COUNTRIES_BY_NAME_REQUEST,
        payload: payload
    }
}
export const getCountriesBynameSuccess = (payload) => {
    return{
        type: GET_COUNTRIES_BY_NAME_SUCCESS,
        payload: payload
    }
}
export const getCountriesBynameFailed = (payload) => {
    return{
        type: GET_COUNTRIES_BY_NAME_FAILED,
        payload: payload
    }
}