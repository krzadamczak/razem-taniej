import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth0ProviderWithistory from "./auth/Auth0ProviderWithHistory";

import IndexLayout from "./pages/IndexLayout";
import HomeLayout from "./pages/Home/Home";

import "./index.css";
import TracksLayout from "./pages/Tracks/TracksLayout";
import Login from "./pages/Login/Login";
import Register from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Auth0ProviderWithistory>
            <Routes>
                <Route path='/' element={<IndexLayout />}>
                    <Route index element={<HomeLayout />} />
                    <Route path='trasy' element={<TracksLayout />} />
                    <Route path='logowanie' element={<Login />} />
                    <Route path='rejestracja' element={<Register />} />
                </Route>
            </Routes>
        </Auth0ProviderWithistory>
    </BrowserRouter>
);
