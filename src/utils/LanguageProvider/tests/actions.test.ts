/**
 * Test for Action-Creators for LanguageProvider
 * Created by Bantais:sahil for React Typescript on 2/18/2019, 1:41:37 PM
 */

import { defaultAction } from "../actions";
import { DEFAULT } from "../constants";

describe("LanguageProvider actions", () => {
  describe("Default Action", () => {
    it("has a type of ACTION", () => {
      const expected = {
        type: DEFAULT.ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
