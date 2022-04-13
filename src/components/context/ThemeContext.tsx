import { createContext } from "react";

const themes = {
    light: {
        main: "#000000",
        text: "#eeeeee"
    },
    dark: {
        main: "#ffffff",
        text: "#222222"
    }
};

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(themes);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={themes} >{children}</ThemeContext.Provider>
}


