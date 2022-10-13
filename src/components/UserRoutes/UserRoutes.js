import React from "react";
import { useOutletContext } from "react-router-dom";
import SingleRouteAuthor from "../SingleRouteAuthor/SingleRouteAuthor";

const UserRoutes = (props) => {
    const [data, isLoading] = useOutletContext();

    if (isLoading) return <p>Wczytywanie danych...</p>;
    return <div>{data && data.routesCreated.map((route) => <SingleRouteAuthor data={route} />)}</div>;
};

export default UserRoutes;
