import { createContext } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(themes);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={themes} >{children}</ThemeContext.Provider>
}


