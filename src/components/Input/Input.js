import React from "react";
import "./Input.css";

const Input = (props) => {
    //NOTE: Apparently, for certain attributes, React is intelligent enough to omit the attribute if the value you pass to it is not truthy.
    //https://stackoverflow.com/questions/31163693/how-do-i-conditionally-add-attributes-to-react-components
    //BUG: Uzupełnianie jednego inputu powoduje wyświetlanie console.log dla pozostałych inputów, dlaczego?

    const inputSettings = {
        value: props.value,
        onChange: props.onChange,
        name: props.name,
        placeholder: props.placeholder,
        type: props.type,
        id: props.id,
    };
    console.log("inputSettings", inputSettings);

    let externalPositioning = "";

    if (props.hasOwnProperty("externalPositioning")) {
        externalPositioning = `${props.externalPositioning}__input-wrapper`;
    }

    return (
        <div className={`input-wrapper ${externalPositioning}`}>
            <input className='input' {...inputSettings} />
            <label className='label' htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};

export default Input;
