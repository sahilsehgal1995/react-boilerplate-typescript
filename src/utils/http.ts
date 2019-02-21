import { from, Observable } from 'rxjs';

const defaultOptions = {};

/**
 * Get method for api calls
 * @param url the url of the api to call
 * @param options options for fetch call
 */
const get: <T>(url: string, options?: any) => Observable<T> = <T>(url: string, options: any = {}): Observable<T> => {
    return from(fetch(url, { ...defaultOptions, ...options,  method: 'GET' })
        .then((response) => response.json() as Promise<T>));
};

// just 1 call

/**
 * Post method for api calls
 * @param url the url of the api to call
 * @param options options for post call
 */
const post: <T>(url: string, options?: any) => Observable<T> = <T>(url: string, options: any = {}): Observable<T> => {

    return from(fetch(url, {
        ...defaultOptions,
        ...options,
        ...(options.body ? { body: JSON.stringify(options.body) } : {}),
        method: 'POST',
    })
        .then((response) => response.json() as Promise<T>));
};

/**
 * Export functions
 */
export const http = {
    get,
    post,
};
