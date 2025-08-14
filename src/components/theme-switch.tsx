"use client";

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '../../context/theme-context';

export default function ThemeSwitch() {
    const moon = (<BsMoon />);
    const sun = (<BsSun />);
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="fixed right-7 top-7 w-[3rem] h-[3rem] bg-opacity-0 backdrop-blur-[0rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.5] active:scale-105 transition">
            {
                theme === "dark" ? (moon) : (sun)
            }
        </button>
    )
}

//  border border-white border-opacity-40 bg-[var(--xamarth)]