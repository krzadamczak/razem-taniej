import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth0ProviderWithistory from "./auth/Auth0ProviderWithHistory";
import IndexLayout from "./pages/IndexLayout";
import HomePage from "./pages/Home/Home";
import TracksPage from "./pages/Tracks/TracksLayout";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Auth0ProviderWithistory>
            <Routes>
                <Route path='/' element={<IndexLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='trasy' element={<TracksPage />} />
                </Route>
            </Routes>
        </Auth0ProviderWithistory>
    </BrowserRouter>
);
