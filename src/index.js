import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth0ProviderWithistory from "./auth/Auth0ProviderWithHistory";

import IndexLayout from "./Layouts/IndexLayout";
import HomeLayout from "./Layouts/HomeLayout";

import "./index.css";
import TracksLayout from "./Layouts/TracksLayout";
import LoginLayout from "./Layouts/LoginLayout";
import RegisterLayout from "./Layouts/RegisterLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithistory>
                <Routes>
                    <Route path='/' element={<IndexLayout />}>
                        <Route index element={<HomeLayout />} />
                        <Route path='trasy' element={<TracksLayout />} />
                        <Route path='logowanie' element={<LoginLayout />} />
                        <Route path='rejestracja' element={<RegisterLayout />} />
                    </Route>
                </Routes>
            </Auth0ProviderWithistory>
        </BrowserRouter>
    </React.StrictMode>
);
