import React, {useRef, useState, useEffect, useContext} from "react";
import classNames from "classnames/bind";
import {FaMoon} from "react-icons/fa"
import {BsFillSunFill} from "react-icons/bs"

import { ThemeContext } from "../ThemeContect/themeContext";

import styles from "./SiwtchStyle.module.scss"
const cx = classNames.bind(styles)

const SwitchMode = () => {
    const themeContext = useContext(ThemeContext)

    const [isDark, setIsDark] = useState(false)
    const refToggle = useRef()
    const refCircle = useRef()
    const refInput = useRef()

    useEffect(()=> {
        refInput.current.checked = isDark;
    },[isDark])

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked)
        themeContext.toogleTheme()
    }

    useEffect(()=>{
        const changeBackgroudButton = () => {
            if(isDark){
                refCircle.current.style.background = '#222'
                refToggle.current.style.background = '#fff'
            }else{
                refCircle.current.style.background = '#fff'
                refToggle.current.style.background = 'var(--ToggleButtonBackground)'
            }
        }
        changeBackgroudButton()
        document.addEventListener('resize', changeBackgroudButton)
        return () => {
            document.removeEventListener('resize', changeBackgroudButton)
        }
    },[isDark])
    return(
        <div className={cx('toggleButton')} ref={refToggle} onClick={handleToggle}>
            <input ref={refInput} type='checkbox' className={cx('input')}/>
            <div className={cx('icon')}>
                {
                    isDark ? <FaMoon/> : <BsFillSunFill/>
                }
            </div>
            <div className={cx('circle')} ref={refCircle}></div>
        </div>
    )
}
export default SwitchMode