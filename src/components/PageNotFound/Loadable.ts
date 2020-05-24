/**
 * Asynchronously loads the component for PageNotFound
 * Created by it for React Typescript on 2/5/2019, 4:17:37 PM
 */

import loadable from "@loadable/component";

export default loadable(() => import("./index")) as any;
