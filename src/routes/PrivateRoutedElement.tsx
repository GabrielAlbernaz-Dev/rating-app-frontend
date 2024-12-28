import { Component } from "react";
import AuthService from "../services/auth/AuthService";
import { Navigate } from "react-router-dom";
import { PATHS, PrivateRouteProps, RouteByAuth } from ".";

class PrivateRouteElement extends Component<PrivateRouteProps> implements RouteByAuth {
    getRouteElementByAuth() : React.ReactNode {
        return AuthService.isAuthenticated()
            ? this.props.children
            : <Navigate to={PATHS.home} replace />;
    }

    render() {
        return this.getRouteElementByAuth();
    }
}

export default PrivateRouteElement;