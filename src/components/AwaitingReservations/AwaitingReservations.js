import React from "react";
import dayjs from "dayjs";
import { useApi } from "../../hooks/useApi";
import "./AwaitingReservations.css";
import { useState } from "react";
import { useEffect } from "react";

const AwaitingReservations = (props) => {
    const { startingPlace, destination, departureDate, _id } = props.data;
    const { operation, data } = useApi();
    const users = [...props.data.reservations.unconfirmed];
    console.log("props", props);
    return (
        <div className='single-route-short'>
            <div>
                {startingPlace} {">"} {destination}
            </div>
            <div>{dayjs(departureDate).format("DD.MM.YYYY")}</div>
            <div>
                {users &&
                    users.map((user) => {
                        return (
                            <div>
                                <div> {user.email}</div>
                                <div>{_id}</div>

                                <div>
                                    <div onClick={props.onReservation("accept")}>Zaakceptuj</div>
                                    <div onClick={props.onReservation("reject")}>Odrzuć</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default AwaitingReservations;
