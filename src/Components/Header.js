import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from './ThemeContext'; 

const Header = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-800 shadow-md'}`}>
            <div className={`text-3xl font-semibold font-pacifico text-center flex-grow ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Live Weather Application using React
            </div>
            <IconButton
                onClick={toggleTheme}
                sx={{
                    color: darkMode ? '#FFD700' : '#1F2937',
                }}
                aria-label="Toggle theme"
            >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </div>
    );
};

export default Header;