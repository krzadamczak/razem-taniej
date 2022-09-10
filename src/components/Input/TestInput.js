import React from "react";
import "./TestInput.css";

const TestInput = (props) => {
    const inputSettings = {
        value: props.value,
        onClick: props.onClick,
        name: props.name,
        placeholder: props.placeholder,
        type: props.type,
        id: props.id,
    };

    const defaultClassName = "input2";
    let externalPositioning = "";

    if (props.hasOwnProperty("externalPositioning")) {
        externalPositioning = `${props.externalPositioning}__${defaultClassName}`;
    }
    return (
        <div className={`input-wrapper ${externalPositioning}`}>
            <input className='input2' {...inputSettings}>
                {props.children}
            </input>
            <label className='label2' htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};

export default TestInput;
