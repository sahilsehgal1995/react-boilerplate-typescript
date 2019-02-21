import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-immutable';
import history from './utils/history';
import languageProviderReducer from './utils/LanguageProvider/reducer';

export default function createRootReducer(asyncReducers = {}) {

    const rootReducer = combineReducers({
        language: languageProviderReducer,
        router: connectRouter(history),
        ...asyncReducers,
    });

    return rootReducer;
}
