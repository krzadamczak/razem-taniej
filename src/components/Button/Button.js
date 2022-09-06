import React from "react";
import "./Button.css";

const Button = (props) => {
    const settings = {
        value: props.value,
        onClick: props.onClick,
        name: props.name,
    };
    const defaultClassName = "button";
    let extendedClassName = [defaultClassName];
    if (props.hasOwnProperty("variant")) {
        extendedClassName.push(`${defaultClassName}--${props.variant}`);
    } else {
        extendedClassName.push(`${defaultClassName}--contained`);
    }

    if (props.hasOwnProperty("externalPositioning")) {
        extendedClassName.push(`${props.externalPositioning}__${defaultClassName}`);
    }

    return (
        <button {...settings} className={extendedClassName.join(" ")}>
            {props.children}
        </button>
    );
};

export default Button;
