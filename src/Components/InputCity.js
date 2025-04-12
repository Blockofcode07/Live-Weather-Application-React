import React from 'react';

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
    return (
        <div className="input">
            <input
                type = "text"
                value = {city}
                onChange = {onInputHandler}
                placeholder ="City..."
            />
            <br />
            <buttton className = "input_btn" type = "submit" onClick ={onSubmitHandler}>
                Search
            </buttton>
        </div>
    );
};

export default InputCity;