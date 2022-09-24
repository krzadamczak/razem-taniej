import React from "react";
import Input from "../Input/Input";
import "./Filter.css";

const Filter = () => {
    return (
        <div className='filter'>
            <Input label='Miejsce wyjazdu' />
            <Input label='Miejsce przyjazdu' />
            <Input label='Data' type='date' />
            <Input label='Liczba wolnych miejsc' />
        </div>
    );
};

export default Filter;
