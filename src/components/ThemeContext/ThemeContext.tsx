import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextType } from "../../types/themContextType";

export const ThemeContext =  createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ( { children } : {children:ReactNode })=>{

    //guardar o estado da luz
    const [isDark, setIsDark] = useState(false);

    //função para alternar o tema
    const toggleTheme = () => {
        setIsDark((prevIsDark) => !prevIsDark);
    };

    return(
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}