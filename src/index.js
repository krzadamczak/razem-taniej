import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth0ProviderWithistory from "./auth/Auth0ProviderWithHistory";
import IndexLayout from "./pages/IndexLayout";
import HomePage from "./pages/Home/Home";
import AllRoutes from "./pages/AllRoutes/AllRoutes";
import AddRoute from "./pages/AddRoute/AddRoute";
import Profile from "./pages/Profile/Profile";
import ProfileUserInfo from "./components/ProfileUserInfo/ProfileUserInfo";

import "dayjs/locale/pl";

import "./index.css";
import dayjs from "dayjs";
import UserRoutes from "./components/UserRoutes/UserRoutes";
import Reservations from "./components/Reservations/Reservations";

dayjs.locale("pl");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithistory>
            <Routes>
                <Route path='/' element={<IndexLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='przejazdy' element={<AllRoutes />} />
                    <Route path='dodaj-przejazd' element={<AddRoute />} />
                    <Route path='profil' element={<Profile />}>
                        <Route index element={<UserRoutes />} />
                        <Route path='ustawienia' element={<ProfileUserInfo />} />
                        <Route path='rezerwacje' element={<Reservations />} />
                    </Route>
                </Route>
            </Routes>
        </Auth0ProviderWithistory>
    </BrowserRouter>
    // </React.StrictMode>
);
