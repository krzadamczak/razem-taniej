import React from "react";
import { useOutletContext } from "react-router-dom";
import SingleRouteShort from "../SingleRouteShort/SingleRouteShort";

function Reservations() {
    const [data, isLoading] = useOutletContext();
    return (
        <div className='profile__main'>
            <div className='reservations'>
                <section className='reservations__section'>
                    <div className='reservations__title'>Moje rezerwacje</div>
                </section>
                <section className='reservations__section'>
                    <div className='reservations__title'>Rezerwacje na moje przejazdy</div>
                    <div className='reservations__content'>
                        {data && data.routesCreated.map((route) => <SingleRouteShort data={route} />)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Reservations;
