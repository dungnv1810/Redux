import React, {useState} from "react";
import styled from "styled-components";
import {BsSearch}  from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

const Search = () => {
    const [valueInput, setValueInput] = useState('')
    const navigate = useNavigate()
    const handleKeyDown = e => {
        if(e.keyCode === 13){
            (valueInput !== '') ? navigate(`/search/${valueInput}`) : navigate('/')
        }
    }
    return(
        <SearchPane>
            <h3>Search Country:</h3>
            <SearchElement>
                <input 
                    onChange={(e)=> 
                    setValueInput(e.target.value)} 
                    onKeyDown={handleKeyDown}
                    value={valueInput} type='text' 
                    placeholder="Input the and enter to search..."/>
                <Link to={valueInput !== '' ? `/search/${valueInput}` : '/'} style={{width: '40px', height: '100%'}}>
                    <BsSearch className="icon"/>
                </Link>
            </SearchElement>
        </SearchPane>
    )
}
export default Search

const SearchPane = styled.div`
    margin-top: 20px;
    max-width: 320px;
    width: 100%;
    h3{
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow);
    }
`
const SearchElement = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 35px;
    background: #fff;
    box-shadow: var(--boxShadow);
    border-radius: 5px;
    overflow: hidden;
    input{
        flex: 1;
        padding-left: 10px;
        border: 0;
        outline: none;
        height: 100%;
        font-size: 18px;
        font-weight: 500;

    }
    .icon{
        cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 5px;
        text-align: center;
        background: #aaa !important;
        opacity: 75%;
        transition: opacity 0.2s linear;
        &:hover{
            opacity: 1;
        }
    }
`