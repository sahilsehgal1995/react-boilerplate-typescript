/**
 * Asynchronously loads the component for App
 * Created by Bantais:sahil for React Typescript on 2/18/2019, 3:07:44 PM
 */

import loadable from "@loadable/component";

export default loadable(() => import("./index"));
