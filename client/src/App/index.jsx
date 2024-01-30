import React, { Fragment } from "react";
import BaseStyles from "./BaseStyles";
import { font } from  "../shared/utils/styles";
import "./fontStyles.css";
import HomePage from "../Project/Home";
import NavbarLeft from "../Project/NavbarLeft";
import NavbarRight from "../Project/NavbarRight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioUpload from "../Project/AudioUpload";
import { AppStateProvider } from "../shared/contextAPI/toggle";
import Login from "../Project/Login";

const App = () => (
    <Router>
        <AppStateProvider>
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
            </Routes>
        </AppStateProvider>
    </Router>
)

export default App;