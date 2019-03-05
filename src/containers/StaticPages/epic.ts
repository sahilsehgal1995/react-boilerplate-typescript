/**
 * staticPages Epics
 * Contains epics for StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { defaultAPIAction } from './actions';
import { staticPagesApiCall } from './api';
import { DEFAULT_API} from './constants';

export const staticPagesEpic = (action$: ActionsObservable<Action>, state$: StateObservable<Action>):
    Observable<string | object> => action$
    .pipe(
        ofType(DEFAULT_API.REQUEST),
        tap((action: Action) => {
            // console.log('Do your awesome Epic for Form in this area', action)
        }),
        switchMap(() => staticPagesApiCall()
            .pipe(
                map((payload) => defaultAPIAction.success(payload)),
                catchError((err) => of(defaultAPIAction.failure(err))),
            ),
        ),
    );

export default staticPagesEpic;
