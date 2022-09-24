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
        <label className={`checkbox-wrapper ${externalPositioning}`}>
            <input className='checkbox-wrapper__input' type='checkbox' {...settings} />
            {props.children}
        </label>
    );
};

export default Checkbox;
