/*
 * StaticPages reducer
 * All reducers for StaticPages goes here
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { fromJS } from 'immutable';
import { createReducer } from '../../utils/actioncreator';
import { DEFAULT , DEFAULT_API } from './constants';
import { IStaticPagesApiContract } from './interface';

const initialState: IStaticPagesApiContract = fromJS({});

/**
 * All your reducers go here based on the constants that are created in the constants file
 */
const staticPagesReducer = createReducer(initialState, {
  [DEFAULT.ACTION]: (state: object) => ({...state, ...initialState}),
  [DEFAULT_API.SUCCESS]: (state: object, action: any) => ({...state, ...action}),
  [DEFAULT_API.FAILURE]: (state: object, action: any) => ({...state, ...action}),
});

export default staticPagesReducer;
