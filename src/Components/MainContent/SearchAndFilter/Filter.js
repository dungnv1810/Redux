import React, {useContext, useRef, useState, useEffect} from "react";
import {FaChevronDown} from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Options from "./Options";

import { ThemeContext } from "../../ThemeContect/themeContext";
const Filter = () => {
    const refSelect = useRef(null)

    const [valueOption, setValueOption] = useState('All')
    const {regionName} = useParams()
    useEffect(()=>{
        if(regionName){
            setValueOption(regionName)
        }else{
            setValueOption('All')
        }
    },[regionName])


    const [isShowOption, setIsShowOption] = useState(false)
    const handleOption = (e) => {
        if(refSelect.current){
            setIsShowOption(refSelect.current.contains(e.target))
        }
    }
    useEffect(()=>{
        if(isShowOption){
            document.addEventListener('click', handleOption)
            return () => {
                document.removeEventListener('click', handleOption)
            }
        }
    })

    const themeContext = useContext(ThemeContext)
    return(
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select className={themeContext.theme} ref={refSelect} onClick={handleOption}>
                    <span>{valueOption}</span><FaChevronDown/>
                </Select>
                <Options isShowOption={isShowOption}/>
            </SelectPane>
        </FilterPane>
    )
}
export default Filter
const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;
    h3{
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow);
    }
`
const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
`
const Select = styled.div`
    width: 100%;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: var( --boxShadow);
    height: 34px;
    user-select: none;
    font-weight: bold;
`