import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navigation.css";
import Button from "../Button/Button";

const Navigation = () => {
    const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

    const logoutHandler = () => {
        logout({ returnTo: window.location.origin });
    };
    const loginHandler = () => {
        loginWithRedirect();
    };
    const registerHandler = () => {
        loginWithRedirect({ screen_hint: "signup" });
    };
    return (
        <nav className='nav'>
            <ul className='nav__wrapper'>
                <NavLink className='nav__link' to='/'>
                    Strona główna
                </NavLink>
                <NavLink className='nav__link' to='/trasy'>
                    Trasy
                </NavLink>
                {isAuthenticated && !isLoading && (
                    <NavLink className='nav__link' to='/profil'>
                        Profil
                    </NavLink>
                )}
                {!isAuthenticated && !isLoading && (
                    <Button modifier='button--login' onClick={loginHandler}>
                        Zaloguj się
                    </Button>
                )}
                {!isAuthenticated && !isLoading && (
                    <Button modifier='button--register' onClick={registerHandler}>
                        Zarejestruj się
                    </Button>
                )}
                {isAuthenticated && !isLoading && (
                    <Button modifier='button--navigation' onClick={logoutHandler}>
                        Wyloguj się
                    </Button>
                )}

                {/*Tymczasowo. Jak użyć loginWithRedirect bez onClick? https://stackoverflow.com/questions/66523916/how-to-call-auth0-loginwithredirect-function-in-react-useeffect-without-button-c */}
            </ul>
        </nav>
    );
};

export default Navigation;
