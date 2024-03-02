import {
    call, // gọi các funtion bất đồng bộ
    all, // thực hiện tất cả tác vụ bất đồng bộ
    put, // dispatch một funtion lên reducer
    takeEvery,  // lắng nghe tất cả các action có cùng type khi đc dispatch
    takeLatest, // lắng nghe thàng cuối cùng được dispatch trong tất cả các action 
    delay // tạm dừng trương trinhg 1 khoảng thời gian nhất định
} from "redux-saga/effects";
import {
    GET_COUNTRIES_REQUEST,
    GET_COUNTRY_BY_NAME_REQUEST,
    GET_COUNTRIES_BY_REGION_REQUEST,
    GET_COUNTRIES_BY_NAME_REQUEST
} from './Constants'

import {getCountryApi, getCountryByName, grtCountryByRegion, getCountriesByName} from "./Services"

import {
    getCountriesSuccess, getCountriesFailed,
    getCountrySuccess, getCountryFailed,
    getCountryByRegionSuccess, getCountryByRegionFailed,
    getCountriesBynameSuccess, getCountriesBynameFailed 
} from "./Action" 

function* getCountriesProcess(params) {
    try{
        const response = yield call(getCountryApi)
        if(response.status === 200 || response.status === 201){
            yield put(getCountriesSuccess(response.data))
        }else{
            yield put(getCountriesFailed())
        }
        
    }catch(err){
        yield put(getCountriesFailed())
    }
}
function* watchGetCountries() {
    yield takeLatest(GET_COUNTRIES_REQUEST, getCountriesProcess)
}

function* getCountryProcess(params) {
    const payload = params.payload
    try{
        const response = yield call(getCountryByName, payload)
        if(response.status === 200 || response.status === 201){
            yield put(getCountrySuccess(response.data[0]))
        }else{
            yield put(getCountryFailed())
        }
    }catch(err){
        yield put(getCountryFailed())
    }
}
function* watchGetCountry() {
    yield takeLatest(GET_COUNTRY_BY_NAME_REQUEST, getCountryProcess)
}

function* getCountryRegion(params){
    const payload = params.payload
    try{
        const response = yield call(grtCountryByRegion, payload)
        if(response.status === 200 || response.status === 201){
            yield put(getCountryByRegionSuccess(response.data))
        }else{
            yield put(getCountryByRegionFailed())
        }
    }catch(err){
        yield put(getCountryByRegionFailed())
    }
}
function* watchGetCountryRegion(){
    yield takeLatest(GET_COUNTRIES_BY_REGION_REQUEST, getCountryRegion)
}

function* getCountryByNames(params){
    const param = params.payload
    try{
        const response = yield call(getCountriesByName, param)
        if(response.status === 200 || response.status === 201){
            yield put(getCountriesBynameSuccess(response.data))
        }else{
            yield put(getCountriesBynameFailed())
        }
    }catch(err){    
        yield put(getCountriesBynameFailed())
    }
}
function* watchGetCountryByName(){
    yield takeLatest(GET_COUNTRIES_BY_NAME_REQUEST, getCountryByNames)
}
function* watchAll() {
    yield all([
        watchGetCountries(),
        watchGetCountry(),
        watchGetCountryRegion(),
        watchGetCountryByName()
    ])
}
export default watchAll
