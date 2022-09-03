import React, { useEffect } from "react";
import "./Button.css";

const Button = (props) => {
    let extendedClassName = [];
    if (props.hasOwnProperty("modifier")) {
        extendedClassName.push(props.modifier);
    }
    if (props.hasOwnProperty("className")) {
        extendedClassName.push(props.className);
    } else {
        extendedClassName.push("button");
    }
    useEffect(() => {
        console.log(props);
    });
    return <button {...props} className={extendedClassName.join(" ")}></button>;
};

export default Button;
