import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

//pages
import HomePage from "../../pages/Home/HomePage";
import LoginPage from "../../pages/Login/LoginPage";
import RouteGuard from "../RouteGuard/RouteGuard";
import About from "../../pages/About/About";
import SignUpPage from "../../pages/Signup/SignUpPage";
import MainPanel from "../../pages/Main/MainPanel";
import Landing from "../MainPanel/Landing/Landing";

function RouteController() {
    //store the route inside this list
    const routeList = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/main/*",
            element: <MainPanel />,
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
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}

// Needs to be implemented to change the routes inside the dashboard
function DashboardRouteController() {
    //store the route inside this list
    const routeList = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "landing",
            element: <Landing />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ];

    return (
        <Routes>
            {routeList?.map((route, ind) => {
                return (
                    <Route
                        key={"route-" + ind}
                        path={route.path}
                        element={route.element}
                    />
                );
            })}
        </Routes>
    );
}

export default RouteController;
export { DashboardRouteController };
