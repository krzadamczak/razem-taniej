import React from "react";
import Button from "../Button/Button";

const SingleRoute = (props) => {
    const { startingPlace, destination, departureTime, arrivalTime, animals } = props;
    return (
        <div className='route'>
            <div className='route__header'>
                <div className='route__column'>
                    <div className='route__place'>{startingPlace}</div>
                    <div className='route__time'>{departureTime}</div>
                </div>
                <div className='arrow'>{">"}</div>
                <div className='route__column'>
                    <div className='route__place'>{destination}</div>
                    <div className='route__time'>{arrivalTime}</div>
                </div>
            </div>
            <div className='route__additional-informations'>
                <p>Wolna liczba miejsc: 2</p>
                <p>{animals}</p>
                {animals ? <p>Możesz zabrać swojego zwierzaka ze sobą!</p> : <p>Przykro mi, bez zwierząt.</p>}
            </div>
            <div className='route__personal-info'>
                <div className='route__driver'>
                    <div className='route__name'>Krzysztof</div>
                    <div className='route__rating'>5</div>
                </div>
                <Button variant='text'>Napisz do kierowcy</Button>
            </div>
        </div>
    );
};

export default SingleRoute;
