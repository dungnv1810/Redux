import React, {createContext, useState} from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('lightTheme')

    const toogleTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    }

    const valueTheme = {theme, toogleTheme}

    return(
        <>
            <ThemeContext.Provider value={valueTheme}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
