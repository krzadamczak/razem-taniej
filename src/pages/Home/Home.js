import React from "react";

import "./Home.css";
import HomeIcon from "./Home_1.svg";
import HomeBackground from "./Home_2.svg";

const HomeLayout = () => {
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
                <h2 className='h2'>Gdzie chcesz jechać?</h2>
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
                    <button className='button'>Szukaj</button>
                </div>
                <div className='where-to-go__background'></div>
                <div className='where-to-go__mask'></div>
            </div>
        </>
    );
};

export default HomeLayout;
