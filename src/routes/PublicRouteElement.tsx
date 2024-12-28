import { Component } from "react";
import { Navigate } from "react-router-dom";
import { PublicRouteProps, RouteByAuth } from "./types";
import AuthService from "../services/auth/AuthService";
import { PATHS } from ".";

class PublicRouteElement extends Component<PublicRouteProps> implements RouteByAuth {
    getRouteElementByAuth() : React.ReactNode {
        return AuthService.isAuthenticated()
            ? <Navigate to={PATHS.dashboard} replace />
            : this.props.children;
    }

    render() {
        return this.getRouteElementByAuth();
    }
}

export default PublicRouteElement;