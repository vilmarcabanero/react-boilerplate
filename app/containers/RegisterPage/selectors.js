import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */
const selectRegisterPageDomain = state => state.registerPage || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterPage
 */

const makeSelectRegisterPage = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.toJS(),
  );

export default makeSelectRegisterPage;
export { selectRegisterPageDomain };
