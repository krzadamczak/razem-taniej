import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import AwaitingReservations from "../AwaitingReservations/AwaitingReservations";
import SingleRouteShort from "../SingleRouteShort/SingleRouteShort";
// TODO: Rezerwacja przechodzi do potwierdzonych dopiero po drugim kliknięciu. Błąd przy renderowaniu?
function Reservations() {
    const [data, setData, isLoading, setIsLoading] = useOutletContext();
    const { user } = useAuth0();

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleReservation = (routeId, userId) => (status) => (e) => {
        console.log({ routeId, userId, status });
        fetch(`/api/test`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ routeId, userId, status }),
        })
            .then((res) => res.json())
            .then((res) => console.log(res));

        const controller = new AbortController();
        setIsLoading(true);
        fetch(`/api/users/${user?.sub}`, { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => setIsLoading(false));
        return () => {
            controller.abort();
        };
    };
    return (
        <div className='profile__main'>
            <div className='reservations'>
                <section className='reservations__section'>
                    <div className='reservations__title'>Moje rezerwacje</div>
                    <div className='reservations__content'>
                        {data &&
                            data.myReservations.map((reservation) => (
                                <p>
                                    {reservation.startingPlace} {">"} {reservation.destination}
                                </p>
                            ))}
                    </div>
                </section>
                <section className='reservations__section'>
                    <div className='reservations__title'>Rezerwacje na moje przejazdy</div>
                    <div className='reservations__first-inner'>
                        <div className='reservations__second-inner'>
                            <div className='reservations__subtitle'>Oczekujące</div>
                            <div className='reservations__content'>
                                {data &&
                                    data.routesCreated
                                        .filter((route) => route?.reservations.unconfirmed.length > 0)
                                        .map((route) =>
                                            route?.reservations?.unconfirmed.map((user) => (
                                                <AwaitingReservations
                                                    data={route}
                                                    onReservation={handleReservation(route._id, user._id)}
                                                />
                                            ))
                                        )}
                            </div>
                        </div>
                        <div className='reservations__second-inner'>
                            <div className='reservations__subtitle'>Potwierdzone</div>
                            <div className='reservations__content'>
                                {data &&
                                    data.routesCreated
                                        .filter((route) => route?.reservations.confirmed.length > 0)
                                        .map((route) => <SingleRouteShort data={route} />)}
                            </div>
                        </div>
                        <div className='reservations__second-inner'>
                            <div className='reservations__subtitle'>Odrzucone</div>
                            <div className='reservations__content'></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Reservations;
