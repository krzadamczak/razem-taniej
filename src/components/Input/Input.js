import React from "react";
import "./Input.css";

const Input = (props) => {
    let extendedClassName = [];
    if (props.hasOwnProperty("modifier")) {
        extendedClassName.push(props.modifier);
    }
    if (props.hasOwnProperty("className")) {
        extendedClassName.push(props.className);
    } else {
        extendedClassName.push("input");
    }

    return <input {...props} id={props.labelFor} className={extendedClassName.join(" ")}></input>;
    /* Kopiowanie tylko wybranych atrybutów, jak to zrobić? */
};

export default Input;
