import React from "react";
import dayjs from "dayjs";
import { useApi } from "../../hooks/useApi";

const SingleRouteShort = (props) => {
    const { startingPlace, destination, departureDate, _id } = props.data;
    const [isLoading, error, data, operation] = useApi();
    const users = [...props.data.reservations.unconfirmed];
    const handleReservation = (routeId, userId) => (e) => {
        console.log("🚀 ~ handleReservation ~ e, id", e, userId);
        operation(`/api/test`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ routeId, userId }),
        });
    };
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
                                    <div onClick={handleReservation(_id, user._id)}>Zaakceptuj</div>
                                    <div>Odrzuć</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default SingleRouteShort;
