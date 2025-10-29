import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



export const useTheme = () => {

    //implementar a lógica para usar o contexto do tema
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error("useTheme precisa ser utilizado somente ThemeProvider");
    }

    return context;
};