/**
 * StaticPages API Endpoints
 * Contains api calls and endpoints for StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { Observable } from 'rxjs';
import { http } from '../../utils/http';

/**
 * Your main api call to outside this environment goes from here
 * Make sure your API returns an Observable of strict type of your contract that is defined in the interface
 */
export const staticPagesApiCall: () => Observable<string> =
    (): Observable<string> =>
        http.get<string>('http://www.mocky.io/v2/5c7915e43000007d3149b1c0');
