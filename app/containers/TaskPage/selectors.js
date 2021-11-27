import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the taskPage state domain
 */
const selectTaskPageDomain = state => state.taskPage || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TaskPage
 */

const makeSelectTaskPage = () =>
  createSelector(
    selectTaskPageDomain,
    substate => substate.toJS(),
  );

export default makeSelectTaskPage;
export { selectTaskPageDomain };
