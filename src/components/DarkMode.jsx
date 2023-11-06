import { createContext, useContext, useEffect, useState } from "react";

const DarkMode = createContext();

export const useDarkMode = () => useContext(DarkMode);

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({children}) => {
    const [isDarkMode , setIsDarkMode] = useState(false);

    useEffect(() => {
        const saveDarkMode = localStorage.getItem('darkMode');
        setIsDarkMode(saveDarkMode === 'true');
    },[]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode',!isDarkMode);
    }

    return (
        <DarkMode.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkMode.Provider>
    )

}

