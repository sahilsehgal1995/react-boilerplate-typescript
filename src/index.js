import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';
import * as serviceWorker from './serviceWorker';
import { StoreContext } from 'redux-react-hook';
import configureStore from './configureStore';
import history from './utils/history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import { ConnectedRouter } from 'connected-react-router/immutable';
import LanguageProvider from './utils/LanguageProvider/Loadable';
import { Provider } from 'react-redux';
import { translationMessages } from './i18n';

const initialState = {};

export const store = configureStore(initialState, history);

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LanguageProvider messages={translationMessages}>
                    <MuiThemeProvider theme={theme}>
                        <App />
                    </MuiThemeProvider>
                </LanguageProvider>
            </ConnectedRouter>
        </Provider>
    </StoreContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
