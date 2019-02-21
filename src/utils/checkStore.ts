import invariant from 'invariant';
import conformsTo from 'lodash/fp/isEmpty';
/**
 * Validate the shape of redux store
 */

interface IStoreObject {
  dispatch: () => void;
  subscribe: () => void;
  getState: () => void;
  replaceReducer: () => void;
  injectedReducers: object;
}

export default function checkStore(store: IStoreObject) {
  invariant(
    conformsTo(store),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
