import React, {useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

import { ThemeContext } from "../ThemeContect/themeContext";

import SwitchMode from "./SwitchMode";
const Header = () => {
    const themeContext =  useContext(ThemeContext)
    return(
        <HeaderPane className={themeContext.theme}>
            <Link to='/'>
                <span>There in the world?</span>
            </Link>
            <SwitchMode/>
        </HeaderPane>
    )
}
export default Header
const HeaderPane = styled.div`
    width: 100%;
    height: 8vh;
    padding: 0px 50px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--boxShadow);
    span{
        font-size: 24px;
        font-weight: bold;
        text-shadow: var(--TextShadow);
    }
`