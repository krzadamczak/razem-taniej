import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navigation.css";

const Navigation = () => {
    const { isAuthenticated, isLoading, logout, user } = useAuth0();
    useEffect(() => {
        console.log({ isAuthenticated });
        //console.log pojawia się dwa razy, dlaczego?
    }, [isAuthenticated]);
    return (
        <nav className='nav'>
            <ul className='nav__wrapper'>
                <NavLink className='nav__link' to='/'>
                    Strona główna
                </NavLink>
                <NavLink className='nav__link' to='/trasy'>
                    Trasy
                </NavLink>
                {(
                    <NavLink className='nav__link' to='/profil'>
                        Profil
                    </NavLink>
                ) &&
                    isAuthenticated &&
                    !isLoading}
                {!isAuthenticated && !isLoading && (
                    <Link className='nav__link' to='/logowanie'>
                        Zaloguj się
                    </Link>
                )}
                {!isAuthenticated && !isLoading && (
                    <Link className='nav__link' to='/rejestracja'>
                        Zarejestruj się
                    </Link>
                )}
                <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                {/*Tymczasowo. Jak użyć loginWithRedirect bez onClick? https://stackoverflow.com/questions/66523916/how-to-call-auth0-loginwithredirect-function-in-react-useeffect-without-button-c */}
            </ul>
        </nav>
    );
};

export default Navigation;
