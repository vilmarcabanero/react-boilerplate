import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = state => state.auth || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */

const makeSelectAuth = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.toJS(),
  );

export default makeSelectAuth;
export { selectAuthDomain };
