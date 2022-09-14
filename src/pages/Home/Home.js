import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./Home.css";
import HomeIcon from "./Home_1.svg";

const HomePage = () => {
    const [formData, setformData] = useState({
        startingPlace: "",
        destination: "",
        destination2: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setformData((prevformData) => ({
            ...prevformData,
            [name]: value,
        }));
    };
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
                        <Input
                            label='Miejsce wyjazdu'
                            name='startingPlace'
                            id='starting-place'
                            type='text'
                            value={formData.startingPlace}
                            onChange={handleInputChange}
                        />
                        <Input
                            label='Miejsce docelowe'
                            type='text'
                            name='destination'
                            id='destination'
                            value={formData.destination}
                            onChange={handleInputChange}
                        />
                        <Button variant='contained'>Szukaj</Button>
                    </div>
                </div>
            </div>
            <div className='last-added-routes'>
                <h2 className='h2 last-added-routes__h2'>Ostatnio dodane trasy</h2>
                <div className='last-added-routes__first-inner'>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                    <div className='last-added-routes__box'>
                        <div className='last-added-routes__path'>Poznań - Śrem</div>
                        <div className='last-added-routes__date'>Data wyjazdu: 28 lipiec 18:00</div>
                    </div>
                </div>
                <Button variant='text'>Zobacz wszystkie połączenia</Button>
            </div>
        </>
    );
};

export default HomePage;
