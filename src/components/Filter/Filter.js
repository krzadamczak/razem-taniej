import React from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import "./Filter.css";

const Filter = (props) => {
    const handleInputChange = (e) => {
        props.onFilterChange(e);
    };
    const handleFormSubmit = (e) => {
        props.onFilterSubmit(e);
    };
    return (
        <form className='filter' onSubmit={handleFormSubmit}>
            <div className='filter__inner'>
                <Input
                    onChange={handleInputChange}
                    name='startingPlace'
                    value={props.filterValues.startingPlace}
                    label='Miejsce wyjazdu'
                />
                <Input
                    onChange={handleInputChange}
                    name='destination'
                    value={props.filterValues.destination}
                    label='Miejsce docelowe'
                />
                <Input
                    onChange={handleInputChange}
                    name='date'
                    value={props.filterValues.date}
                    label='Data wyjazdu'
                    type='date'
                />
                <Input
                    onChange={handleInputChange}
                    name='availableSeats'
                    value={props.filterValues.availableSeats}
                    label='Liczba wolnych miejsc'
                />
            </div>
            <div className='filter__second-inner'>
                <span className='filter__title'>Dodatkowe informacje</span>
                <Checkbox name='animals' onChange={handleInputChange} checked={props.filterValues.animals}>
                    Będę podróżować ze zwierzętami
                </Checkbox>
            </div>
        </form>
    );
};

export default Filter;
