import React from "react";
import "./TestInput.css";

const TestInput = () => {
    return (
        <div className='input-wrapper'>
            <input className='input2' placeholder='At least 6 characters' type='text' id='password'></input>
            <label className='label2' htmlFor='password'>
                Name
            </label>
        </div>
    );
};

export default TestInput;
