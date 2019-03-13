/**
 * Test cases for StaticPages's reducers
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { fromJS } from 'immutable';
import {IStaticPagesApiContract} from '../interface';
import staticPagesReducer from '../reducer';

const initialState: IStaticPagesApiContract = fromJS({});

describe('staticPagesReducer', () => {
  it('returns the initial state', () => {
    const initialState: IStaticPagesApiContract = fromJS({});
    // var sucess;
    // var payload;
    // expect(staticPagesReducer(initialState, {type: sucess, payload})).toEqual(fromJS({}));
    // expect(staticPagesReducer(initialState, ("")))
    //     .toEqual({});//
  });
});
