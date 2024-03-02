import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../ThemeContect/themeContext"

const Footer = () => {
    const themeContext = useContext(ThemeContext)
    return(
        <>
            <FooterWrapper className={themeContext.theme}>
                <h4>Copyright &copy; Dũng Nguyễn</h4>
                <p>dungcoi459@gmail.com</p>
            </FooterWrapper>
        </>
    )
}
export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`