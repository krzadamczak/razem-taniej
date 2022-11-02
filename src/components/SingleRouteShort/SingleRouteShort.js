import React from "react";
import dayjs from "dayjs";
import { useApi } from "../../hooks/useApi";
import "./SingleRouteShort.css";

const SingleRouteShort = (props) => {
    const { startingPlace, destination, departureDate, _id } = props.data;

    return (
        <div className='single-route-short'>
            <div>
                {startingPlace} {">"} {destination}
            </div>
            <div>{dayjs(departureDate).format("DD.MM.YYYY")}</div>
            <div>{props.child}</div>
        </div>
    );
};

export default SingleRouteShort;
