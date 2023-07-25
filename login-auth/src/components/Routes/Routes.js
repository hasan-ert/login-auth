import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

//pages
import HomePage from "../../pages/Home/HomePage";
import LoginPage from "../../pages/Login/LoginPage";
import RouteGuard from "../RouteGuard/RouteGuard";
import About from "../../pages/About/About";
import Signup from "../../pages/Signup/Form";

function RouteController() {
    //store the route inside this list
    const routeList = [
        {
            path: "/home",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ];

    return (
        <Router>
            <Routes>
                <Route element={<RouteGuard />}>
                    {routeList?.map((route, ind) => {
                        return (
                            <Route
                                key={"route-" + ind}
                                path={route.path}
                                element={route.element}
                                exact
                            />
                        );
                    })}
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default RouteController;
