/**
 * Asynchronously loads the component for StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
