import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer className={`footer py-4 text-center ${darkMode 
            ? 'bg-[#1E2A38] text-[#B0C4DE]'  // Greyish blue background, light slate text in dark mode
            : 'bg-[#E0F7FA] text-[#0D47A1]'  // Light blue background, dark blue text in light mode
        }`}>
            Created by <strong>Aditya Jawanjal</strong> &nbsp;|&nbsp; Version: 0.1.0
        </footer>
    );
};

export default Footer;
