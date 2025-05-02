import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        value={city}
        onChange={onInputHandler}
        placeholder="City..."
        className={`px-6 py-3 rounded-full text-lg border-2 w-72 shadow-md transition-all duration-300 outline-none
                    ${darkMode
                      ? 'bg-blue-900 text-white placeholder-gray-300 border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:scale-105'
                      : 'bg-white text-gray-900 placeholder-gray-500 border-blue-100 focus:border-blue-500 focus:scale-105'}`}
      />
      <button
        type="submit"
        onClick={onSubmitHandler}
        className={`ml-4 px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300
                    ${darkMode
                      ? 'bg-blue-500 text-white hover:bg-blue-400'
                      : 'bg-blue-500 text-white hover:bg-blue-600'} hover:scale-105`}
      >
        Search
      </button>
    </div>
  );
};

export default InputCity;
