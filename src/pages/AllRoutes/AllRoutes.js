import React from "react";
import { useState, useEffect } from "react";
import SingleRoute from "../../components/SingleRoute/SingleRoute";
import Filter from "../../components/Filter/Filter";
import { handleChange } from "../../helpers";
import dayjs from "dayjs";
import "./AllRoutes.css";
//TODO: Dodać opcje filtrowania - np. data, miejsce.
const AllRoutes = () => {
    const [allRoutes, setAllRoutes] = useState([]);
    const [filterValues, setFilterValues] = useState({
        startingPlace: "",
        destination: "",
        date: "",
        availableSeats: 1,
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
        console.log(filterValues);
    };

    useEffect(() => {
        console.log(filterValues);
        fetch("/api/routes")
            .then((response) => response.json())
            .then((response) => setAllRoutes([...response]));
        return () => {};
    }, []);

    const filteredArray = allRoutes.filter((item) => {
        return (
            item.startingPlace.toLowerCase().includes(filterValues.startingPlace.toLowerCase()) &&
            item.destination.toLowerCase().includes(filterValues.destination.toLowerCase()) &&
            (item.animals === filterValues.animals || item.animals) &&
            (dayjs(item.departureDate).isSame(dayjs(filterValues.date), "day") || filterValues.date === "") &&
            (item.availableSeats >= filterValues.availableSeats || filterValues.availableSeats === "")
        );
    });

    return (
        <>
            <Filter
                onFilterChange={handleChange(setFilterValues)}
                onFilterSubmit={handleFilterSubmit}
                filterValues={filterValues}
            />
            <div className='all-routes'>
                {filteredArray.length !== 0 ? (
                    filteredArray.map((item) => {
                        console.log(item);
                        return (
                            <SingleRoute
                                key={item._id}
                                startingPlace={item.startingPlace}
                                destination={item.destination}
                                arrivalTime={item.arrivalTime}
                                departureTime={item.departureTime}
                                departureDate={item.departureDate}
                                animals={item.animals}
                                availableSeats={item.availableSeats}
                            />
                        );
                    })
                ) : (
                    <p>Nie znaleźliśmy żadnych wyników, spróbuj rozszerzyć zakres filtrów.</p>
                )}
            </div>
        </>
    );
};

export default AllRoutes;
