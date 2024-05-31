import {createContext, useContext, useEffect, useState} from "react";

const Theme ={
    LIGHT:"light",
    DARK: "dark",
}
export const THEME_VALUES = ["light","dark"]

export const DEFAULT_THEME = Theme.DARK;
const isValidTheme = (value) =>
    THEME_VALUES.includes(value);

export const THEME_LOCAL_STORAGE_KEY = "theme";
const getThemeFromLocalStorage = () => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    if (themeValue && isValidTheme(themeValue)) return themeValue;
    return DEFAULT_THEME;
};

export const ThemeContext = createContext({
    theme: DEFAULT_THEME,
    toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);

    const toggleTheme = () =>
        setTheme((oldTheme) =>
            oldTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        );

    useEffect(() => {
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error(
            "useThemeContext must be used within a ThemeContextProvider"
        );
    }

    return context;
};
