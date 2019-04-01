/**
 * Test cases for StaticPages's reducers
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { fromJS } from 'immutable';
import {DEFAULT_API} from '../constants';
import {IStaticPagesApiContract} from '../interface';
import staticPagesReducer from '../reducer';

describe('staticPagesReducer', () => {
  it('returns the initial state', () => {
    const initialState: IStaticPagesApiContract = fromJS({});
    expect(staticPagesReducer(initialState, {type: DEFAULT_API.REQUEST})).toEqual(fromJS({}));
  });
});
