import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./AddRoute.css";
// Czy lepiej trzymać czas i datę wyjazdu w osobnych atrybutach w bazie danych,
// czy w trakcie wypełniania formularza połączyć w jeden atrybut departureDate?
const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        startingPlace: "",
        destination: "",
        departureDate: "",
        departureTime: "",
        arrivalTime: "",
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
                        <Input
                            label='Miejsce wyjazdu'
                            name='startingPlace'
                            id='starting-place'
                            type='text'
                            value={newRoute.startingPlace}
                            onChange={handleInputChange}
                        />
                        <Input
                            label='Miejsce docelowe'
                            value={newRoute.destination}
                            type='text'
                            name='destination'
                            id='destination'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-route__group'>
                        <h3 className='h3'>Kiedy planujesz wyjechać?</h3>
                        <Input
                            label='Data wyjazdu'
                            name='departureDate'
                            id='departure-date'
                            type='date'
                            onChange={handleInputChange}
                            value={newRoute.departureDate}
                        />
                        <Input
                            name='departureTime'
                            value={newRoute.departureTime}
                            type='time'
                            id='departure-time'
                            label='Godzina wyjazdu'
                            onChange={handleInputChange}
                        />
                        <Input
                            label='Godzina przyjazdu'
                            name='arrivalTime'
                            id='arrival-time'
                            type='time'
                            value={newRoute.arrivalTime}
                            onChange={handleInputChange}
                        />
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
