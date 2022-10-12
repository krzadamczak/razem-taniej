import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import { useFetch } from "../../hooks/useFetch";

const Profile = () => {
    const { user } = useAuth0();
    const [data, isLoading] = useFetch(`/api/users/${user?.sub}`, {
        defaultState: {
            data: {
                routesCreated: [
                    {
                        startingPlace: "",
                        destination: "",
                    },
                ],
            },
        },
    });

    return (
        <div className='profile'>
            <aside className='profile__sidebar'>
                <p className='profile__title'>User Profile</p>
                <ul className='menu'>
                    {/*NOTE: Czy użycie pojedyńczej kropki jest poprawne?
                    Link ma przenosić na stronę /profil
                    */}
                    <NavLink to='.'>User Info</NavLink>
                    <NavLink to='moje-przejazdy'>My Routes</NavLink>
                    <NavLink to='ustawienia'>Settings</NavLink>
                </ul>
            </aside>
            <Outlet context={[data, isLoading]} />
        </div>
    );
};

export default Profile;
