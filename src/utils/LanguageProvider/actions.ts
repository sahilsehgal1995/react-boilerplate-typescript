/**
 * LanguageProvider actions
 * Action-Creators for LanguageProvider
 * Created by Bantais:sahil for React Typescript on 2/18/2019, 1:41:37 PM
 */
import { createAction } from "../actioncreator";
import { DEFAULT } from "./constants";

export const defaultAction = createAction(DEFAULT.CHANGE_LOCALE);
