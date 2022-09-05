import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";

import "./Home.css";
import HomeIcon from "./Home_1.svg";

const HomePage = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero__inner'>
                    <p className='hero__description'>
                        Wspólne podróżowanie to świetny sposób na zaoszczędzenie czasu, energii i pieniędzy.
                    </p>
                    <p className='hero__catchphrase'>Pamiętaj, razem taniej!</p>
                </div>
                <img className='hero__icon' src={HomeIcon} alt='Home Icon' />
            </div>
            <div className='where-to-go'>
                <div className='where-to-go__z-index'>
                    <h2 className='h2 where-to-go__h2'>Gdzie chcesz jechać?</h2>
                    <div className='where-to-go__form'>
                        <div className='where-to-go__inner'>
                            <label className='label' htmlFor='start-place'>
                                Miejsce wyjazdu
                            </label>
                            <input className='input' type='text' id='start-place' />
                        </div>
                        <div className='where-to-go__inner'>
                            <label className='label' htmlFor='end-place'>
                                Miejsce docelowe
                            </label>
                            <input className='input' type='text' id='end-place' />
                        </div>
                        <div className='where-to-go__inner'>
                            <Label className='label' htmlFor='end-place'>
                                Miejsce docelowe
                            </Label>
                            <Input className='input' type='text' id='end-place' />
                        </div>
                        <Button modifier='button--primary'>Szukaj</Button>
                    </div>
                </div>
            </div>
            <div className='last-added-tracks'>
                <h2 className='h2 last-added-tracks__h2'>Ostatnio dodane trasy</h2>
                <div className='last-added-tracks__first-inner'>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-tracks__box'>
                        <div className='last-added-tracks__path'>Poznań - Śrem</div>
                        <div className='last-added-tracks__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                </div>
                <Button modifier='button-primary'></Button>
            </div>
        </>
    );
};

export default HomePage;
