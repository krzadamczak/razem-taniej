import dayjs from "dayjs";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./AddRoute.css";
//NOTE: Czy lepiej trzymać czas i datę wyjazdu w osobnych atrybutach w bazie danych,
// czy w trakcie wypełniania formularza połączyć w jeden atrybut departureDate?

//TODO: Weryfikacja formularza.
//TODO: Dodawanie informacji o osobie która wystawiła ogłoszenie.
const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        startingPlace: "",
        destination: "",
        departureDate: dayjs().format("YYYY-MM-DD"),
        departureTime: dayjs().format("HH:mm"),
        arrivalDate: dayjs().format("YYYY-MM-DD"),
        arrivalTime: dayjs().format("HH:mm"),
        animals: false,
    });
    const handleInputChange = (e) => {
        const { name, value, type } = e.currentTarget;
        if (type === "checkbox") {
            setNewRoute((prevNewRoute) => ({
                ...prevNewRoute,
                [name]: !prevNewRoute[name],
            }));
        } else {
            setNewRoute((prevNewRoute) => ({
                ...prevNewRoute,
                [name]: value,
            }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(newRoute);
        fetch("/api/routes", {
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
                <form onSubmit={handleFormSubmit} className='add-route__form'>
                    <div className='add-route__group'>
                        <h3 className='h3'>Cel podróży</h3>
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
                        <h3 className='h3'>Informacje o wyjeździe</h3>
                        <Input
                            label='Data wyjazdu'
                            name='departureDate'
                            id='departure-date'
                            type='date'
                            onChange={handleInputChange}
                            value={newRoute.departureDate}
                            required
                        />
                        <Input
                            name='departureTime'
                            value={newRoute.departureTime}
                            type='time'
                            id='departure-time'
                            label='Godzina wyjazdu'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-route__group'>
                        <h3 className='h3'>Informacje o przyjeździe</h3>
                        <Input
                            label='Data przyjazdu'
                            name='arrivalDate'
                            id='arrival-date'
                            type='date'
                            onChange={handleInputChange}
                            value={newRoute.arrivalDate}
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
                    <div className='add-route__group'>
                        <h3>Dodatkowe informacje</h3>
                        <label>
                            <input
                                type='checkbox'
                                name='animals'
                                onChange={handleInputChange}
                                checked={newRoute.animals}
                            />
                            Zgadzam się na podróż ze zwierzętami
                        </label>
                    </div>
                    <Button variant='text' type='submit' onClick={handleFormSubmit}>
                        Dodaj przejazd
                    </Button>
                </form>
            </div>
        </>
    );
};

export default AddRoute;
