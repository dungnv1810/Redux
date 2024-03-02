import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames/bind";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollBar from "react-perfect-scrollbar";

import { ThemeContext } from "../../ThemeContect/themeContext";
import styles from "./CountryInfo.module.scss"
const cx = classNames.bind(styles)

const countryNameByCode = async(code) => {
    const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
    return result.data
}

const CountryInfo = (props) => {
    const {country} = props;

    // Languages
    const getLanguages = () => {
        let result = ''
        country.languages.forEach(languages => {
            if(result !== ''){
                result = result + '-' + languages.name
            }else{
                result += languages.name
            }
        })
        return result
    }

    // getCountryByCode
    const [countryBorder, setCountryBorder] = useState([])
    useEffect(()=>{
        if(country && country.borders){
            countryNameByCode(country.borders)
            .then(res => {
                const countryName = res.map((country) => country.name)
                setCountryBorder(countryName)
            })
            .catch(err => console.log(err))
        }
    },[country])
    console.log('countryBorder', countryBorder)
    

    const themeContext = useContext(ThemeContext)
    return(
        <ScrollBar style={{overflow: 'hidden', maxHeight: '70vh'}}>
            <div className={cx('countryInfo')}>
                {
                    country && (
                        <>
                        <h3 className={cx('countryName')}>{country.name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Native Name</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{country.nativeName}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Official</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>
                                        {`${country.altSpellings[0]}`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Population</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{new Intl.NumberFormat().format(country.population)}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Region</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{country.region}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Sub Region</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{country.subregion}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Capital</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Top Level Domain</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{country.topLevelDomain[0]}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Currencies</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{`${country.currencies[0].code} - ${country.currencies[0].name}`}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Languages</td>
                                    <td>:</td>
                                    <td className={cx('countryInfo__value')}>{getLanguages(country)}</td>
                                </tr>
                                <tr>
                                    <td className={cx('countryInfo__title')}>Border Countries</td>
                                    <td>:</td>
                                    <td className={cx('border__list')}>
                                    {
                                        countryBorder.length > 0 && countryBorder.map((country, index) => {
                                            return(
                                                <Link key={index} to={`/country/${country}`}>
                                                    <div className={cx('borderItem', `${themeContext.theme}`)}>{country}</div>
                                                </Link>
                                            )
                                        })
                                    }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </>
                    )
                }
            </div>
        </ScrollBar>
    )
}
export default CountryInfo