import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./AddRoute.css";

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
                    <div className='add-route__inner'>
                        <Label className='label' htmlFor='startingPlace'>
                            Miejsce wyjazdu
                        </Label>
                        <Input
                            className='input'
                            name='startingPlace'
                            value={newRoute.startingPlace}
                            type='text'
                            id='startingPlace'
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
                    <input className='date' type='date' />
                    <Button variant='text' onClick={handleFormSubmit}>
                        Dodaj przejazd
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AddRoute;
