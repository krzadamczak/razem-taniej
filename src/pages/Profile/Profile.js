import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Input from "../../components/Input/Input";

import "./Profile.css";

const Profile = () => {
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
            <Outlet />
        </div>
    );
};

export default Profile;
