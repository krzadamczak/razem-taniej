import React from "react";
import { useState, useEffect } from "react";
import SingleRoute from "../../components/SingleRoute/SingleRoute";
import Filter from "../../components/Filter/Filter";
import { handleChange } from "../../helpers";
import "./AllRoutes.css";
//TODO: Dodać opcje filtrowania - np. data, miejsce.
const AllRoutes = () => {
    const [allRoutes, setAllRoutes] = useState([]);
    const [filterValues, setFilterValues] = useState({
        startingPlace: "",
        destination: "",
        date: "",
        availableSeats: "",
        animals: false,
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFilterValues((prevFilterValues) => ({
            ...prevFilterValues,
            [name]: value,
        }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        console.log("test");
    };

    useEffect(() => {
        console.log(filterValues);
        fetch("/api/routes")
            .then((response) => response.json())
            .then((response) => setAllRoutes([...response]));
        return () => {};
    }, []);

    return (
        <>
            <Filter
                onFilterChange={handleChange(setFilterValues)}
                onFilterSubmit={handleFilterSubmit}
                filterValues={filterValues}
            />
            <div className='all-routes'>
                {allRoutes
                    .filter((item) => {
                        return (
                            item.startingPlace.toLowerCase().includes(filterValues.startingPlace.toLowerCase()) &&
                            item.destination.toLowerCase().includes(filterValues.destination.toLowerCase()) &&
                            (filterValues.animals === item.animals || item.animals)
                        );
                    })
                    .map((item) => {
                        return (
                            <SingleRoute
                                key={item._id}
                                startingPlace={item.startingPlace}
                                destination={item.destination}
                                arrivalTime={item.arrivalTime}
                                departureTime={item.departureTime}
                                departureDate={item.departureDate}
                                animals={item.animals}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default AllRoutes;
