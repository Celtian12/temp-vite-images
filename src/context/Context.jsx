import { createContext, useEffect, useState } from "react"
export const appContext = createContext();
export const Context = ({children}) => {
    
    const getInitialDarkMode = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
        const storedDarkTheme = localStorage.getItem('darkTheme') === 'true';
        return storedDarkTheme || prefersDarkMode;
    }

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setsearchTerm] = useState('cat');
    const toggleDarkTheme = () => {
        const toggleTheme = !isDarkTheme;
        setIsDarkTheme(toggleTheme);
        localStorage.setItem('darkTheme', isDarkTheme);
    };
    useEffect(() => {
        // const body = document.querySelector('body');
        // if(toggleTheme) {
        //     body.classList.add('dark-theme');
        // }else{
        //     body.classList.remove('dark-theme');
        // }
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme])
    

  return (
    <appContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setsearchTerm}}>
        {children}
    </appContext.Provider>
  )
}
