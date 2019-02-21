
import { store } from '../index';
import createRootReducer from '../rootReducer';

export function injectReducerFactory(storeObj: any, isValid: boolean) {
    return function injectReducer(key: string, reducer: any) {
        storeObj.asyncReducers[key] = reducer;
        storeObj.replaceReducer(createRootReducer(store.asyncReducers));
    };
}

export function getInjectors(storeObj: any) {
    return {
        injectReducer: injectReducerFactory(storeObj, true),
    };
}

export const useInjectReducer = (key: string, reducer: any) => {
    const { injectReducer } = getInjectors(store);
    return injectReducer(key, reducer);
};
