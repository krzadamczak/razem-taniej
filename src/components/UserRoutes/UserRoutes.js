import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

const UserRoutes = () => {
    const { user } = useAuth0();
    const [userRoutes, setUserRoutes] = useState({});
    useEffect(() => {
        if (!user) return;
        const fetchData = async () => {
            const response = await fetch(`/api/users/${user?.sub}`);
            const data = await response.json();
        };
        fetchData();
    }, [user]);
    return <div>UserRoutes</div>;
};

export default UserRoutes;
