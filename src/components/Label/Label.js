import React from "react";
import "./Label.css";

const Label = (props) => {
    return <label {...props}>{props.children}</label>;
};

export default Label;
