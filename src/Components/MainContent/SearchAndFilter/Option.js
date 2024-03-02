import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Option = (props) => {
    const {region} = props
    const navigate = useNavigate()

    const handleValueOption = () => {
        if(region.value !== 'All'){
            navigate(`/region/${region.value}`)
        }else{
            navigate('/')
        }
    }
    return(
        <OptionItem onClick={handleValueOption}>
            {region.icon}
            <span>{region.value}</span>
        </OptionItem>
     )
}
export default Option
const OptionItem = styled.li`
    padding: 5px 8px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        font-weight: bold;
        background: var( --SelectOptionBackground);
        transition: all 0.2s linear;
    }
    span{
        margin-left: 8px;
    }
`