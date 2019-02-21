import { Action } from 'redux';

/**
 * Action/Constants creator utility
 * Creates an action/constant from this utility
 * Inpired by redux-sauce
 */

/**
 * Type for create constants function
 */
type createConstantsType =
    <T extends string, U extends string>(namespace: T, prefix: U | null) =>
        <V extends string>(...constants: V[]) => Record<V, string>;

/**
 * function for creating namespaced constants
 * @author Joy Biswas
 * @param {string} namespace the namespace for the constant to create
 * @param {string} prefix the prefix for the constant to create
 * @returns {Object} namespaced constants for a module/feature
 *
 *    // Common approach
 *    export const NAMESPACE = 'manual';
 *    export const SIDEBAR_TOGGLE = `${NAMESPACE}/SIDEBAR_TOGGLE`;
 *    export const SIDEBAR_OPEN = `${NAMESPACE}/SIDEBAR_OPEN`;
 *    export const SIDEBAR_CLOSE = `${NAMESPACE}/SIDEBAR_CLOSE`;
 *
 *    // Usage of this utility
 *    export const NAMESPACE = 'manual';
 *    export const SIDEBAR = createConstants(NAMESPACE, 'sidebar')('TOGGLE', 'OPEN', 'CLOSE');
 *
 *    // which will generate:
 *    SIDEBAR = {
 *      TOGGLE: 'manual/SIDEBAR_TOGGLE',
 *      OPEN: 'manual/SIDEBAR_OPEN',
 *      CLOSE: 'manual/SIDEBAR_CLOSE',
 *    }
 *
 */
export const createConstants: createConstantsType =
  <T extends string, U extends string>(namespace: T, prefix: U | null = null) =>
    <V extends string>(...constants: V[]): Record<V, string> => (
      constants.reduce((result: Record<V, string>, constant: string): Record<V, string> => ({
        [constant.toUpperCase()]:
          `${namespace}/${(prefix) ? `${prefix.toUpperCase()}_` : ''}${constant.toUpperCase()}`,
        ...result,
      }), {} as Record<V, string>)
    );

/**
 * Alias of the createConstants function ideal for API calls
 * @author Joy Biswas
 * @param {string[]} args namespacing the constants
 * @returns {Object} namespaced constants for an API aliased call
 *
 *    // Usage of this utility
 *    export const NAMESPACE = 'manual';
 *    export const SIDEBAR = createApiConstants(NAMESPACE, 'sidebar');
 *
 *    // which will generate:
 *    SIDEBAR = {
 *      REQUEST: 'manual/SIDEBAR_REQUEST',
 *      SUCCESS: 'manual/SIDEBAR_SUCCESS',
 *      FAILURE: 'manual/SIDEBAR_FAILURE',
 *    }
 *
 */
export const createApiConstants =
  <T extends string>(...args: T[]): Record<'REQUEST' | 'SUCCESS' | 'FAILURE', string> =>
    createConstants(args[0], null)('REQUEST', 'SUCCESS', 'FAILURE');

/**
 * Creates an Action
 * @author Joy Biswas
 * @param {string} type Type of action to create
 * @param {boolean} error true in case of errorAction
 * @returns {Function} Action
 *
 *    // Common approach
 *    const openSideBar = (payload) => ({
 *      type: constants.SIDEBAR_OPEN,
 *      payload,
 *    });
 *
 *    // Usage of this utility
 *    const openSideBar = createAction(constants.SIDEBAR_OPEN);
 *
 */
export const createAction = <T>(type: string, error: boolean = false) =>
    (payload?: T , meta: any = null): {
    type: string,
    payload?: T,
    meta?: any,
    error: boolean,
  } => ({ type, payload, meta, error });

/**
 * Creates an Error action [alias of createAction]
 * @author Joy Biswas
 * @param {string} type Type of Action to create
 * @returns {Function} Action
 *
 *    // Common approach
 *    const getUserFailure = (payload) => ({
 *      type: constants.GET_USER_FAILURE,
 *      payload,
 *      error: true
 *    });
 *
 *    // Usage of this utility
 *    const getUserFailure = createErrorAction(constants.GET_USER_FAILURE);
 *
 */
export const createErrorAction = (type: string) => createAction(type, true);

/**
 * Creates a new API function which dispatches request/success/failure
 * @author Joy Biswas
 * @param {Object} constants Api constants created from createApiConstants fn
 * @param {Function} request The request function to API
 * @param {Object} options Additional meta info
 * @returns {Function} final Api Action to call
 *
 *    //Common approach
 *
 *    // Step - 1 : Request dispatched initial
 *    const fetchDataRequest = () => ({
 *      type: constants.FETCH_DATA_REQUEST,
 *    });
 *
 *    // Step - 2 : Request on success dispatch this
 *    const fetchDataSuccess = (payload, record) => ({
 *      type: constants.FETCH_DATA_SUCCESS,
 *      payload,
 *      record,
 *    });
 *
 *    // Step - 3 : Request on failure dispatch this
 *    const fetchDataFailure = (payload, record) => ({
 *      type: constants.FETCH_DATA_FAILURE,
 *      payload,
 *      record,
 *    });
 *
 *    // The main request call in middleware which dispatches all 3
 *    const fetchData = (payload) => (dispatch) => {
 *      dispatch(fetchDataRequest());
 *      return api.fetchData(payload).then(
 *          ({ data }) => dispatch(fetchDataSuccess(data)),
 *          (error) => {
 *            dispatch(fetchDataFailure(error));
 *            throw error;
 *          },
 *      );
 *    };
 *
 *   // Usage of this utility
 *   const constants = createApiConstants('fetch_data', 'user');
 *   const fetchData = createApiAction(constants);
 *
 */
export const createApiAction = <T>(constants: any) => {
  const request = createAction<null>(constants.REQUEST);
  const success = createAction<T>(constants.SUCCESS);
  const failure = createErrorAction(constants.FAILURE);

  return {
    failure, request, success,
  };
};

/**
 * Creates a reducer function for the component
 * @param initialState The initial state
 * @param handlers set of reducers for your component
 *
 *
 * Usage
 *    const reducer = createReducer(initialState, {
 *       [DEFAULT_ACTION.ACTION]: (state: any) => state,
 *       [DEFAULT_ACTION.DEFAULT]: (state: any) => state,
 *    });
 */
export const createReducer = <T>(initialState: T, handlers: any) => (state: T, action: Action<T>) => {
  const reducerFn = handlers[action.type];
  return reducerFn ? reducerFn(state, action) : initialState;
};
