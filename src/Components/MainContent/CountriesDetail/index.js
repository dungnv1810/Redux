import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { getCountry } from "../Countries/Action";
import CountryInfo from "./CountryInfo";
import { ThemeContext } from "../../ThemeContect/themeContext";
const CountryDetail = (props) => {
    const {
        countryReducer,
        handleGetCountry
    } = props
    const {country} = countryReducer

    const navigate = useNavigate()
    const slug = useParams()

    useEffect(()=>{
        handleGetCountry(slug.countryName)
    },[slug.countryName])

    const themeContext = useContext(ThemeContext)
    return(
        <Wrapper>
            <div onClick={()=>navigate(-1)} className={`go__back ${themeContext.theme}`}>Go Back</div>
            <CountryCountainer>
                <div className="flag">
                    <img src={country ? country.flag : ''} alt=''/>
                </div>
                <CountryInfo country={country}/>
            </CountryCountainer>
        </Wrapper>
    )
}
const mapStateToProps = (state) => {
    return{
        countryReducer: state.Countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleGetCountry: (data) => dispatch(getCountry(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail)


const Wrapper = styled.div`
    padding-top: 20px;
    .go__back{
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        padding: 2px 4px;
        border-radius: 5px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all .2s linear;
        &:hover{
            filter: brightness(1);
            font-weight: bold;
            cursor: default;
            user-select: none;
        }
    }
`
const CountryCountainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 30px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
    .flag{
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--boxShadow);
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`