import React, { useEffect } from "react";
import Button from "../Button/Button";
import dayjs from "dayjs";
import "./SingleRoute.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetch } from "../../hooks/useFetch";
import { useApi } from "../../hooks/useApi";
/*TODO: System rezerwacji
- Użytkownik rezerwuje przejazd
- Kierowca dostaje informację o rezerwacji - może potwierdzić lub odrzucić
- Użytkownik dostaje odpowiedź od kierowcy (widoczne w profilu w zakładce rezerwacje)
*/

const SingleRoute = (props) => {
    const { id, startingPlace, departureDate, destination, departureTime, arrivalTime, animals, createdBy } = props;
    console.log({ createdBy });
    const { user } = useAuth0();
    const [isLoading, error, data, operation] = useApi();
    const handleReservation = (e) => {
        operation(`/api/routes/reservations`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ routeId: id, userId: user.sub }),
        });
    };
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div className='route'>
            <div className='route__header'>
                <div className='route__column'>
                    <div className='route__place'>{startingPlace}</div>
                    <div className='route__time'>{departureTime}</div>
                    <div className='route__date'>{dayjs(departureDate).format("ddd, DD.MM.YYYY")}</div>
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
                    <div className='route__name'>{createdBy.email}</div>
                    <div className='route__rating'>5</div>
                </div>
                <Button variant='text' onClick={handleReservation}>
                    Zarezerwuj
                </Button>
            </div>
        </div>
    );
};

export default SingleRoute;
