import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import PrivateRouteElement from "./PrivateRoutedElement";
import PublicRouteElement from "./PublicRouteElement";
import { PATHS } from ".";

class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path={PATHS.signIn}
                        element={<PublicRouteElement><SignIn /></PublicRouteElement>}
                    />
                    <Route
                        path={PATHS.signUp}
                        element={<PublicRouteElement><h1>SignUp</h1></PublicRouteElement>}
                    />
                    <Route
                        path={PATHS.home}
                        element={<PublicRouteElement><h1>Home</h1></PublicRouteElement>}
                    />
                    <Route
                        path={PATHS.dashboard}
                        element={<PrivateRouteElement><h1>Dashboard</h1></PrivateRouteElement>}
                    />
                    <Route
                        path={PATHS.notFound}
                        element={<h1>Page not found</h1>}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;