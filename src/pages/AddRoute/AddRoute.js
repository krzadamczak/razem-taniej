import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TestInput from "../../components/Input/TestInput";
import Label from "../../components/Label/Label";
import "./AddRoute.css";
// Czy lepiej trzymać czas i datę wyjazdu w osobnych atrybutach w bazie danych,
// czy w trakcie wypełniania formularza połączyć w jeden atrybut departureDate?
const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        startingPlace: "",
        destination: "",
        // date: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setNewRoute((prevNewRoute) => ({
            ...prevNewRoute,
            [name]: value,
        }));
    };
    const handleFormSubmit = () => {
        fetch("/api/route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRoute),
        });
    };
    return (
        <>
            <div className='add-route'>
                <div className='add-route__form'>
                    <div className='add-route__group'>
                        <h3 className='h3'>Dokąd chcesz pojechać?</h3>
                        <div className='add-route__inner'>
                            <Label className='label' htmlFor='starting-place'>
                                Miejsce wyjazdu
                            </Label>
                            <Input
                                className='input'
                                name='startingPlace'
                                value={newRoute.startingPlace}
                                type='text'
                                id='starting-place'
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='add-route__inner'>
                            <Label className='label' htmlFor='destination'>
                                Miejsce docelowe
                            </Label>
                            <Input
                                className='input'
                                name='destination'
                                value={newRoute.destination}
                                type='text'
                                id='destination'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='add-route__group'>
                        <h3 className='h3'>Kiedy planujesz wyjechać?</h3>
                        <div className='add-route__inner'>
                            <Label className='label' htmlFor='departure-date'>
                                Data wyjazdu
                            </Label>
                            <Input
                                className='input'
                                name='departureDate'
                                value={newRoute.departureDate}
                                type='date'
                                id='arriva-time'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-route__inner'>
                            <Label className='label' htmlFor='departure-time'>
                                Godzina wyjazdu
                            </Label>
                            <Input
                                className='input'
                                name='departureTime'
                                value={newRoute.departureTime}
                                type='time'
                                id='departure-time'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-route__inner'>
                            <Label className='label' htmlFor='arrival-time'>
                                Godzina przyjazdu
                            </Label>
                            <Input
                                className='input'
                                name='arrivalTime'
                                value={newRoute.arrivalTimne}
                                type='time'
                                id='arrival-time'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-route__inner'>
                            <TestInput label='Miejsce wyjazdu' name='startingPlace' id='starting-place' />
                        </div>
                    </div>
                    <Button variant='text' onClick={handleFormSubmit}>
                        Dodaj przejazd
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AddRoute;
