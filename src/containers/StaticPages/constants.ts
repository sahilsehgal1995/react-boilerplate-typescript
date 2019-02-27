/**
 * StaticPages constants
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { createApiConstants, createConstants } from '../../utils/actioncreator';

/*
* This creates 2 constants respectively
* DEFAULT.ACTION = 'staticPages/OPTIONAL_PREFIX_action';
* DEFAULT.GO = 'staticPages/OPTIONAL_PREFIX_go';
* If you dont want to further group/namespace remove optional_prefix
* Check the file src/utils/actioncreator.ts for details
*/
export const DEFAULT = createConstants('staticPages', 'optional_prefix')('ACTION', 'GO');

/*
* This creates 3 constants respectively for EPIC calls only
* DEFAULT_API.REQUEST = 'staticPages/REQUEST';
* DEFAULT_API.SUCCESS = 'staticPages/SUCCESS';
* DEFAULT_API.FAILURE = 'staticPages/FAILURE';
*/
export const DEFAULT_API = createApiConstants('staticPages');
