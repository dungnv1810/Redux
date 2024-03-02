import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {ThemeContext} from "../../ThemeContect/themeContext"

const Country = (props) => {
    const {countries} = props
   
    const themeContext = useContext(ThemeContext)

    
    return(
        <>
           {
                countries.map((item, index) => {
                    return(
                        <Link key={index} to={`/country/${item.name}`}>
                            <CountriesCard className={themeContext.theme}>
                                <div className="flag">
                                    <img src={item.flag} alt=''/>
                                </div>
                                    <CountryInfo>
                                            <h3>{item.name}</h3>
                                            <div>
                                                Population:
                                                <span> {new Intl.NumberFormat().format(item.population)}</span>
                                            </div>
                                            <div>
                                                Region:
                                                <span> {item.region}</span>
                                            </div>
                                            <div>
                                                Capital:
                                                <span> {item.capital}</span>
                                            </div>
                                    </CountryInfo>
                                </CountriesCard>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Country

const CountriesCard = styled.div`
    max-width: 420px;
    width: 100%;
    filter: brightness(1);
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 12px;
    user-select: none;
    &:hover{
        filter: brightness(0.9);
    }
    &:hover img{
        transform: scale(1.1);
    }
    .flag{
        width: 100%;
        height: 160px;
        display: block;
        overflow: hidden;
        box-shadow: var(--Background);
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
        }
    }
`
const CountryInfo = styled.div`
    padding: 10px 16px;
    h3{
        font-size: 20px;
        margin: 16px 0px;
        font-weight: bold;
        height: 50px;
        div{
            display: block;
            font-size: 16px;
            font-weight: 700;
            margin: 4px 0px;
            span{
                font-weight: 400;
                margin-left: 5px;
            }
        }
    }
`