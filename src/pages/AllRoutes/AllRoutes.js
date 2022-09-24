import React from "react";
import { useState, useEffect } from "react";
import SingleRoute from "../../components/SingleRoute/SingleRoute";
import Filter from "../../components/Filter/Filter";
import "./AllRoutes.css";
//TODO: Dodać opcje filtrowania - np. data, miejsce.
const AllRoutes = () => {
    const [allRoutes, setAllRoutes] = useState([]);
    useEffect(() => {
        fetch("/api/routes")
            .then((response) => response.json())
            .then((response) => setAllRoutes([...response]));
        return () => {};
    }, []);

    return (
        <>
            <Filter />
            <div className='all-routes'>
                {allRoutes.map((item) => {
                    return (
                        <SingleRoute
                            key={item._id}
                            startingPlace={item.startingPlace}
                            destination={item.destination}
                            arrivalTime={item.arrivalTime}
                            startingTime={item.startingTime}
                            animals={item.animals}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AllRoutes;
