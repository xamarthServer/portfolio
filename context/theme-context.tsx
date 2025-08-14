"use client";

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark" | "root";
type ThemeContextProviderProps = {
    children: React.ReactNode;
};
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("dark");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.remove("root");
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            // window.localStorage.setItem("theme", "dark");
        } if (theme === "dark") {
            setTheme("light");
            document.documentElement.classList.remove("root");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            // window.localStorage.setItem("theme", "light");
        } if (theme === "root") {
            document.documentElement.classList.remove("root");
            document.documentElement.classList.add("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark");
        }
    });

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be within a ThemeContextProvider");
    }
    return (context)
}