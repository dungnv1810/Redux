import axios from "axios";
const BASE_URL = 'https://restcountries.com/v2'

export const getCountryApi = () => {
    return axios.get(`${BASE_URL}/all`)
}

export const getCountryByName = (name) => {
    return axios.get(`${BASE_URL}/name/${name}`)
}

export const grtCountryByRegion = (regionName) =>{
    return axios.get(`${BASE_URL}/region/${regionName}`)
}

export const getCountriesByName = (name) => {
    return axios.get(`${BASE_URL}/name/${name}`)
}

