import dayjs from "dayjs";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./AddRoute.css";
//NOTE: Czy lepiej trzymać czas i datę wyjazdu w osobnych atrybutach w bazie danych,
// czy w trakcie wypełniania formularza połączyć w jeden atrybut departureDate?

//TODO: Weryfikacja formularza.
//TODO: Dodatkowe opcje - np. checkbox czy akceptuje zwierzęta.
//TODO: Dodawanie informacji o osobie która wystawiła ogłoszenie.
const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        startingPlace: "",
        destination: "",
        departureDate: dayjs().format("YYYY-MM-DD"),
        departureTime: dayjs().format("HH:mm"),
        arrivalDate: dayjs().format("YYYY-MM-DD"),
        arrivalTime: dayjs().format("HH:mm"),
    });
    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        setNewRoute((prevNewRoute) => ({
            ...prevNewRoute,
            [name]: value,
        }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch("/api/routes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRoute),
        });
    };

    console.log({ newRoute });
    return (
        <>
            <div className='add-route'>
                <form onSubmit={handleFormSubmit} className='add-route__form'>
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
                    <Button variant='text' type='submit' onClick={handleFormSubmit}>
                        Dodaj przejazd
                    </Button>
                </form>
            </div>
        </>
    );
};

export default AddRoute;
