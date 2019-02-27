/**
 * Test for Action-Creators for StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { defaultAction, defaultAPIAction } from '../actions';
import { DEFAULT, DEFAULT_API } from '../constants';

describe('StaticPages actions', () => {
  describe('Default Action', () => {
    it('has a type of ACTION', () => {
      const expected = {
        type: DEFAULT.ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
    it('has a type of REQUEST in DEFAULT_API', () => {
      const expected = {
        type: DEFAULT_API.REQUEST,
      };
      expect(defaultAPIAction.request()).toEqual(expected);
    });
  });
});
