import React from "react";
import { useState, useEffect } from "react";
import SingleRoute from "../../components/SingleRoute/SingleRoute";
import "./AllRoutes.css";

const AllRoutes = () => {
    const [allRoutes, setAllRoutes] = useState([]);
    useEffect(() => {
        fetch("/api/routes")
            .then((response) => response.json())
            .then((response) => setAllRoutes([...response]));
        return () => {};
    }, []);

    return (
        <div className='all-routes'>
            {allRoutes.map((item) => {
                return (
                    <SingleRoute
                        key={item._id}
                        startingPlace={item.startingPlace}
                        destination={item.destination}
                        arrivalTime={item.arrivalTime}
                        startingTime={item.startingTime}
                    />
                );
            })}
        </div>
    );
};

export default AllRoutes;
