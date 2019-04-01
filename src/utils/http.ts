import { from, Observable } from 'rxjs';

const defaultOptions = {};

/**
 * Get method for api calls
 * @param url the url of the api to call
 * @param options options for fetch call
 */

const get: <T>(url: string, options?: any) => Observable<T> = <T>(url: string, options: any = {}): Observable<T> => {
    return from(fetch(url, { ...defaultOptions, ...options,  method: 'GET' })
        .then((response) => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json() as Promise<T>;
            } else {
                return response.text() as unknown as Promise<T>;
            }
        }));
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
