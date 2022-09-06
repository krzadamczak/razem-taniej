import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./AddTrack.css";

const AddTrack = () => {
    return (
        <>
            <div className='add-track'>
                <div className='add-track__form'>
                    <div className='add-track__inner'>
                        <Label className='label' htmlFor='start-place'>
                            Miejsce wyjazdu
                        </Label>
                        <Input className='input' type='text' id='start-place' />
                    </div>

                    <div className='add-track__inner'>
                        <Label className='label' htmlFor='end-place'>
                            Miejsce docelowe
                        </Label>
                        <Input className='input' type='text' id='end-place' />
                    </div>
                    <Button variant='text'>Dodaj przejazd</Button>
                </div>
            </div>
        </>
    );
};

export default AddTrack;
