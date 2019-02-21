declare global {
    interface IWindow {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export interface IFluxStandardAction {
    type: string | symbol | any;
    payload?: any;
    error?: boolean | any;
    meta?: any;
}
export type FluxStandardActionCreator = (payload?: any) => IFluxStandardAction;

interface IDependencies {
    getJSON: (url: string) => Observable;
}
