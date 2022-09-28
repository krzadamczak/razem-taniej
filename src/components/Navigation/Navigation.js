import React from "react";
import { NavLink } from "react-router-dom";
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

    //NOTE: Po rejestracji uruchmiane jest flow "Post User Registration" z Auth0.
    //Flow wysyła żądanie POST na backend z id użytkownika i jego emailem.
    //W ten sposób mogę stworzyć nowego użytkownika w monngodb u siebie.
    //Podpięcie zewnętrznej bazy danych jest dostępne tylko w płatnych planach.
    const registerHandler = () => {
        loginWithRedirect({ screen_hint: "signup" });
    };
    return (
        <nav className='nav'>
            <ul className='nav__wrapper'>
                <NavLink className='nav__link' to='/'>
                    Strona główna
                </NavLink>
                <NavLink className='nav__link' to='/przejazdy'>
                    Przejazdy
                </NavLink>
                {isAuthenticated && !isLoading && (
                    <NavLink className='nav__link' to='/dodaj-przejazd'>
                        Dodaj nowy przejazd
                    </NavLink>
                )}
                {isAuthenticated && !isLoading && (
                    <NavLink className='nav__link' to='/profil'>
                        Profil
                    </NavLink>
                )}
                {!isAuthenticated && !isLoading && (
                    <Button variant='text' onClick={loginHandler}>
                        Zaloguj się
                    </Button>
                )}
                {!isAuthenticated && !isLoading && (
                    <Button variant='contained' onClick={registerHandler}>
                        Zarejestruj się
                    </Button>
                )}
                {isAuthenticated && !isLoading && (
                    <Button variant='text' onClick={logoutHandler}>
                        Wyloguj się
                    </Button>
                )}

                {/*Tymczasowo. Jak użyć loginWithRedirect bez onClick? https://stackoverflow.com/questions/66523916/how-to-call-auth0-loginwithredirect-function-in-react-useeffect-without-button-c */}
            </ul>
        </nav>
    );
};

export default Navigation;
