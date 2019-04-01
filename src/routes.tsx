import React from 'react';
import {Route} from 'react-router';
import PageNotFound from './components/PageNotFound/Loadable';
import StaticPages from './containers/StaticPages/Loadable';
// import:push
/** ---DONOT TOUCH THIS AREA(import:push line) BANTAIS--- */

export interface IRoute {
    path?: string;
    component?: any;
    exact?: boolean;
    routesData?: [];
    child?: IRoute[];
    type?: React.StatelessComponent;
}

/**
 * Spreads out routes for V4 router to have a flat hierarchy
 * @param routesData nested routes
 * @param parent recursion path variable to spread path
 * @returns flatRoutes
 */
export const spreadRoutes = (routesData: IRoute[], parent: string = ''): IRoute[] => {
    parent = parent === '/' ? '' : parent;
    return routesData.reduce((accumulatedRoutes: IRoute[], route: IRoute) => ([
        ...accumulatedRoutes,
        ...(route.child ? spreadRoutes(route.child, parent + route.path) : []),
        (
            <Route
                key={parent + route.path}
                exact={route.exact}
                path={parent + route.path}
                render={() => <route.component />}
            />
        ),
    ]), []);
};

export const routes = [
    {
        component: PageNotFound,
        exact: true,
        path: '/',
    },
    {
        component: StaticPages,
        exact: false,
        path: '/content',
    },
    // component:push
    /** ---DONOT TOUCH THIS AREA(component:push line) BANTAIS--- */
    {
        // Page not found
        component: PageNotFound,
        path: '**',
    },
];
