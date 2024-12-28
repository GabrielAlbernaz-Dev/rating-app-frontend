export { default as PrivateRouteElement } from './PrivateRoutedElement';
export { default as PublicRouteElement } from './PublicRouteElement';
export { default as Routes } from './AppRoutes';
export * from './types';
export const PATHS = {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    notFound: "*",
    home: "/",
    dashboard: "/dashboard"
};