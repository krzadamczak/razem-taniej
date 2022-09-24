import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import "./Filter.css";

const Filter = () => {
    return (
        <div className='filter'>
            <div className='filter__inner'>
                <Input label='Miejsce wyjazdu' />
                <Input label='Miejsce przyjazdu' />
                <Input label='Data' type='date' />
                <Input label='Liczba wolnych miejsc' />
            </div>
            <div className='filter__inner'>
                <Checkbox>Będę podróżować ze zwierzętami</Checkbox>
            </div>
        </div>
    );
};

export default Filter;
