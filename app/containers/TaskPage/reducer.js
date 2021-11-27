/*
 *
 * TaskPage reducer
 *
 */
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import Actions from './actions';

export const INITIAL_STATE = fromJS({
  status: true,
  data: [],
});

export const defaultReducer = state =>
  state.merge({
    status: false,
  });

export const doSetTaskPage = (state, { data }) =>
  state.merge({
    data,
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEFAULT]: defaultReducer,
  [Types.SET_TASK_PAGE]: doSetTaskPage,
});

export default reducer;
