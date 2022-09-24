import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const settings = {
        onChange: props.onChange,
        name: props.name,
        id: props.id,
        checked: props.checked,
    };

    let externalPositioning = "";

    if (props.hasOwnProperty("externalPositioning")) {
        externalPositioning = `${props.externalPositioning}__label-checkbox`;
    }

    return (
        <label className={`label-checkbox ${externalPositioning}`}>
            <input type='checkbox' {...settings} />
            {props.children}
        </label>
        // <div className={`input-wrapper ${externalPositioning}`}>
        //     <input className='input' {...settings} />
        //     <label className='label' htmlFor={props.id}>
        //         {props.label}
        //     </label>
        // </div>
    );
};

export default Checkbox;
