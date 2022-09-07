import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./AddTrack.css";

const AddTrack = () => {
    const [newTrack, setNewTrack] = useState({
        startPlace: "",
        endPlace: "",
        // date: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setNewTrack((prevState) => ({
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
            body: JSON.stringify(newTrack),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => console.log(res));
    };
    return (
        <>
            <div className='add-track'>
                <div className='add-track__form'>
                    <div className='add-track__inner'>
                        <Label className='label' htmlFor='start-place'>
                            Miejsce wyjazdu
                        </Label>
                        <Input
                            className='input'
                            name='startPlace'
                            value={newTrack.startPlace}
                            type='text'
                            id='start-place'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='add-track__inner'>
                        <Label className='label' htmlFor='end-place'>
                            Miejsce docelowe
                        </Label>
                        <Input
                            className='input'
                            name='endPlace'
                            value={newTrack.endPlace}
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

export default AddTrack;
