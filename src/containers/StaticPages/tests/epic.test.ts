/**
 * Test cases for StaticPages's Epic
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */
import {Action} from 'redux';
import {ActionsObservable, StateObservable} from 'redux-observable';
import { of } from 'rxjs';
import {toArray} from 'rxjs/operators';
import {defaultAPIAction} from '../actions';
import {DEFAULT_API} from '../constants';
import staticPagesEpic from '../epic';
import { response as mockRespone } from './static-page-mock.json';

describe('staticPagesEpic Epic', () => {
  it('Expect to have unit tests specified', (done: any) => {
    const action$ = ActionsObservable.of({
      type: DEFAULT_API.REQUEST,
    });
    const state$: StateObservable<Action> = of({}) as StateObservable<Action>;
    const $obs = staticPagesEpic(action$, state$).pipe(toArray());
    $obs.subscribe((outputActions) => {
        expect(Array.isArray(outputActions)).toBe(true);
        expect(outputActions[0]).toEqual(defaultAPIAction.success(mockRespone));
        done();
    });
  });
});

export {};
