import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ScrollBar from "react-perfect-scrollbar";
import { connect } from "react-redux";

import Loading from "../../Loading/Loading"
import {getCountries, getCountryByRegion, getCountriesByname} from "./Action"
import Country from "./Country";
const Countries = (props) => {
    const {
        countriesReducer,
        handleGetCountries,
        handleGetCountryRegion,
        handleGetCountryName
    } = props
    const {countries, isLoading, error} = countriesReducer

    const slug = useParams()

    useEffect(()=>{
        if(slug.regionName){
            handleGetCountryRegion(slug.regionName)
        }else if(slug.searchName){
            handleGetCountryName(slug.searchName)
        }
        else{
            handleGetCountries()
        }
    },[slug.regionName, slug.searchName])
   
    if(isLoading){
        return(
            <Loading/>
        )
    }
    return(
        <ScrollBar style={{maxHeight: '68vh', overflow: 'hidden'}}>
            <CountriesContainer>
                <Country countries={countries}/>
            </CountriesContainer>
        </ScrollBar>
    )
}
const mapStateToProps = (state) => {
    return{
        countriesReducer: state.Countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleGetCountries:() => dispatch(getCountries()),
        handleGetCountryRegion:(data) => dispatch(getCountryByRegion(data)),
        handleGetCountryName:(data) => dispatch(getCountriesByname(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Countries)

const CountriesContainer = styled.div`
    width: 100%;
    padding: 4px 50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
        gap: 8px;
    }
    @media only screen and (max-width: 680px) {
        grid-template-columns: repeat(1,auto);
    }
`
