import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ShowWeather = ({ data }) => {
    const { darkMode } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState("bg-blue-100");

    const city = data.name;
    const country = data.sys?.country || "";
    const temperature = data.main?.temp || 0;
    const pressure = data.main?.pressure || 0;
    const visibility = data?.visibility || 0;
    const humidity = data.main?.humidity || 0;
    const clouds = data.clouds?.all || 0;

    const pressureInAtm = (pressure / 1000).toFixed(2);
    const tempInCelcius = (temperature / 10).toFixed(2);
    const visibilityInKM = (visibility / 1000).toFixed(2);

    const setDynamicBackground = (temp) => {
        const tempVal = parseFloat(temp);
        if (tempVal < 10) {
            setBgColor("bg-blue-200");
        } else if (tempVal <= 30) {
            setBgColor("bg-yellow-200");
        } else {
            setBgColor("bg-red-300");
        }
    };

    useEffect(() => {
        setDynamicBackground(tempInCelcius);
    }, [tempInCelcius]);

    return (
        <section className={`p-6 md:p-8 rounded-xl shadow-xl max-w-xl mx-auto mt-6 transition-all duration-300
                            ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className={`p-6 rounded-lg ${bgColor} ${darkMode ? 'text-black' : ''}`}>
                <h2 className="text-3xl font-bold mb-2">{city}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{country}</p>

                <h3 className="text-xl font-semibold mb-4">Temperature: {tempInCelcius} °C</h3>
                <hr className={`mb-4 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">Pressure</p>
                        <span className="text-sm">{pressureInAtm} atm</span>
                    </div>
                    <div>
                        <p className="font-semibold">Visibility</p>
                        <span className="text-sm">{visibilityInKM} Km</span>
                    </div>
                    <div>
                        <p className="font-semibold">Humidity</p>
                        <span className="text-sm">{humidity}%</span>
                    </div>
                    <div>
                        <p className="font-semibold">Clouds</p>
                        <span className="text-sm">{clouds}%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowWeather;
