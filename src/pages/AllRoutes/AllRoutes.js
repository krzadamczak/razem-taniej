import React from "react";
import Button from "../../components/Button/Button";
import "./AllRoutes.css";

const AllRoutes = () => {
    return (
        <div className='allRoutes'>
            <div className='route'>
                <div className='route__header'>
                    <div className='route__column'>
                        <div className='route__place'>Poznań</div>
                        <div className='route__time'>8:00</div>
                    </div>
                    <div className='arrow'>{">"}</div>
                    <div className='route__column'>
                        <div className='route__place'>Poznań</div>
                        <div className='route__time'>8:00</div>
                    </div>
                </div>
                <div className='route__additional-informations'>
                    <p>Wolna liczba miejsc: 2</p>
                    <p>Bez zwierząt</p>
                </div>
                <div className='route__personal-info'>
                    <div className='route__driver'>
                        <div className='route__name'>Krzysztof</div>
                        <div className='route__rating'>5</div>
                    </div>
                    <Button variant='text'>Napisz do kierowcy</Button>
                </div>
            </div>
        </div>
    );
};

export default AllRoutes;
