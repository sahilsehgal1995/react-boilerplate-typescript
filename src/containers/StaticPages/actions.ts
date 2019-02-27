/**
 * StaticPages actions
 * Action-Creators for StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */
import { createAction, createApiAction } from '../../utils/actioncreator';
import { DEFAULT, DEFAULT_API } from './constants';

/**
 * This creates 1 default action.
 * defaultAction = function (payload) { return { type: DEFAULT.ACTION, payload: payload}};
 * You can simply dispatch that action using dispatch(defaultAction());
 * The payload is optional and can be omitted if not required.
 */
export const defaultAction = createAction(DEFAULT.ACTION);

/**
 * This creates 3 default API actions.
 * defaultAction.request = function (payload) { return { type: DEFAULT_API.REQUEST}};
 * defaultAction.success = function (payload) { return { type: DEFAULT_API.SUCCESS, payload: payload}};
 * defaultAction.failure = function (error) { return { type: DEFAULT_API.REQUEST, payload: error}};
 * You can simply dispatch request action using dispatch(defaultAPIAction.request());
 * You can simply dispatch success action using dispatch(defaultAPIAction.success(payload));
 * You can simply dispatch failure action using dispatch(defaultAPIAction.failure(error));
 * The payload is optional and can be omitted if not required.
 */
export const defaultAPIAction = createApiAction(DEFAULT_API);
