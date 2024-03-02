import React, {useContext, useRef, useEffect} from "react";
import styled from "styled-components";

import Option from "./Option";

import {GiWorld} from "react-icons/gi";

import { ThemeContext } from "../../ThemeContect/themeContext";
const regionList = [
    {
        id: 1,
        icon: <GiWorld/>,
        value: 'All'
    },
    {
        id: 2,
        icon: <GiWorld/>,
        value: 'Africa'
    },
    {
        id: 3,
        icon: <GiWorld/>,
        value: 'Americas'
    },
    {
        id: 4,
        icon: <GiWorld/>,
        value: 'Asia'
    },
    {
        id: 5,
        icon: <GiWorld/>,
        value: 'Europe'
    },
    {
        id: 6,
        icon: <GiWorld/>,
        value: 'Oceania'
    },
]
const Options = ({isShowOption}) => {
    const themeContext = useContext(ThemeContext)

    useEffect(()=>{
        const ShowOption = () => {
            if(isShowOption){
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`
            }else{
                refOptions.current.style.transform = `scaleY(0)`;
                refOptions.current.style.maxHeight = `0`
            }
        }
        ShowOption();
        document.addEventListener('resize', ShowOption)
        return () => {
            document.removeEventListener('resize', ShowOption)
        }
    },[isShowOption])

    const refOptions = useRef(null)

    return(
        <OptionPane ref={refOptions} className={themeContext.theme}>
            {
                regionList.map((region) => {
                    return(
                        <Option key={region.id} region={region}/>
                    )
                })
            }
        </OptionPane>
    )
}
export default Options
const OptionPane = styled.ul`
    width: 100%;
    margin-top: 3px;
    border-radius: 5px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`