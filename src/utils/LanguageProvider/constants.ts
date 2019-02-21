/**
 * LanguageProvider constants
 * Created by Bantais:sahil for Turtlemint on 2/18/2019, 1:41:37 PM
 */

import { createConstants } from '../actioncreator';

/*
* This creates 2 constants respectively
* DEFAULT.ACTION = 'languageProvider/OPTIONAL_PREFIX_action';
* DEFAULT.GO = 'languageProvider/OPTIONAL_PREFIX_go';
* If you dont want to further group/namespace remove optional_prefix
* Check the file src/utils/actioncreator.ts for details
*/
export const DEFAULT = createConstants('languageProvider', 'optional_prefix')('CHANGE_LOCALE');
