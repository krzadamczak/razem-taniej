import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./AddRoute.css";

const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        startPlace: "",
        endPlace: "",
        // date: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setNewRoute((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleFormSubmit = () => {
        fetch("/api/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRoute),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => console.log(res));
    };
    return (
        <>
            <div className='add-route'>
                <div className='add-route__form'>
                    <div className='add-route__inner'>
                        <Label className='label' htmlFor='start-place'>
                            Miejsce wyjazdu
                        </Label>
                        <Input
                            className='input'
                            name='startPlace'
                            value={newRoute.startPlace}
                            type='text'
                            id='start-place'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='add-route__inner'>
                        <Label className='label' htmlFor='end-place'>
                            Miejsce docelowe
                        </Label>
                        <Input
                            className='input'
                            name='endPlace'
                            value={newRoute.endPlace}
                            type='text'
                            id='end-place'
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
