export type PublicRouteProps = {
    children?: React.ReactNode
}

export type PrivateRouteProps = {
    children?: React.ReactNode
}

export interface RouteByAuth {
    getRouteElementByAuth() : React.ReactNode;
}