import React from 'react';
import {withRouter} from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes, spreadRoutes} from '../../routes';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {spreadRoutes(routes)}
                </Switch>
            </div>
        </Router>
    );
};

export default withRouter(App);
