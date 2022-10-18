import React from "react";
import Button from "../Button/Button";
import dayjs from "dayjs";
/*TODO: Edytowanie/usunięcie przejazdu
1. Wygląd
- Znalezienie ikonek i ich instalacja
- Dodanie odpowiednich ikonek
2. Edycja
- Przejście na stronę z formularzem do edycji wpisu
- Sprawdzenie czy mogę zmodyfikować wpis (np. jeżeli jest chociaż jedna potrwierdzona rezerwacja)
- Wysłanie żadania do serwera ze zmienionym wpisem.
- Obsłużenie żądania po stronie serwea i odesłanie odpowiedzi.
3. Usunięcie
- Wysłanie żądania do serwera z id wpisu do usunięcia.
- Obsłużenie żądania po stronie serwea i odesłanie odpowiedzi.
*/
const SingleRouteAuthor = (props) => {
    const { startingPlace, departureDate, destination, departureTime, arrivalTime, animals, availableSeats } =
        props.data;
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
                <p>Wolna liczba miejsc: {availableSeats}</p>
                <p>{animals}</p>
                {animals ? <p>Możesz zabrać swojego zwierzaka ze sobą!</p> : <p>Przykro mi, bez zwierząt.</p>}
            </div>
        </div>
    );
};

export default SingleRouteAuthor;
