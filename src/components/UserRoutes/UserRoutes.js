import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

//NOTE:Czemu pojawia się błąd Cannot read properties of undefined (reading 'map') jeżeli podaję domyślny stan?
const UserRoutes = (props) => {
    const [data, isLoading] = useOutletContext();
    useEffect(() => {
        console.log(data);
        console.log(isLoading);
    }, [isLoading]);

    if (isLoading) return <p>Wczytywanie danych...</p>;
    return (
        <div>
            {console.log("xxx", data)}
            {data.routesCreated.map((route) => (
                <p>
                    {route.startingPlace} = {route.destination}
                </p>
            ))}
        </div>
    );
};

export default UserRoutes;
