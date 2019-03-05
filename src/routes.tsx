import React from 'react';
import { MappedLayout } from './components/Layout';
import PageNotFound from './components/PageNotFound/Loadable';
import StaticPages from './containers/StaticPages/Loadable';
// import:push
/** ---DONOT TOUCH THIS AREA(import:push line) BANTAIS--- */

export interface IRoute {
    path?: string;
    component?: React.ComponentClass;
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
            <MappedLayout
                key={parent + route.path}
                {...route}
                parent={parent}
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
        // child: [
        //     {
        //         component: StaticPages,
        //         exact: false,
        //         path: '/static',
        //     },
        // ],
        component: StaticPages,
        exact: false,
        path: '/static/pages',
    },
    // component:push
    /** ---DONOT TOUCH THIS AREA(component:push line) BANTAIS--- */
    {
        // Page not found
        component: PageNotFound,
        path: '**',
    },
];
