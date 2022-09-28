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
        <div className='filter'>
            <form onSubmit={handleFormSubmit}>
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
                <div className='filter__inner'>
                    <Checkbox>Będę podróżować ze zwierzętami</Checkbox>
                </div>
                <Button>Szukaj</Button>
            </form>
        </div>
    );
};

export default Filter;
