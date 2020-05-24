/*
 * LanguageProvider reducer
 * All reducers for LanguageProvider goes here
 * Created by Bantais:sahil for React Typescript on 2/18/2019, 1:41:37 PM
 */

import { fromJS } from "immutable";
import { createReducer } from "../actioncreator";
import { DEFAULT } from "./constants";
import { ILanguageProviderApiContract } from "./interface";

const initialState: ILanguageProviderApiContract = fromJS({ locale: "en" });

const languageProviderReducer = createReducer(initialState, {
  [DEFAULT.CHANGE_LOCALE]: (state: object, action: object) => ({
    ...state,
    ...initialState,
    ...action,
  }),
});

export default languageProviderReducer;
