/*
 *
 * Auth reducer
 *
 */
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import Actions from './actions';

export const INITIAL_STATE = fromJS({
  status: true,
  userData: {},
  isSignedIn: false,
});

export const defaultReducer = state =>
  state.merge({
    status: false,
  });

export const doSetAuth = (state, { data }) =>
  state.merge({
    data,
  });

export const doSetUser = (state, { data }) =>
  state.merge({
    userData: { ...data },
  });

export const doToggleSignedIn = (state, { isSignedIn }) =>
  state.merge({
    isSignedIn,
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEFAULT]: defaultReducer,
  [Types.SET_AUTH]: doSetAuth,
  [Types.SET_USER]: doSetUser,
  [Types.TOGGLE_SIGNED_IN]: doToggleSignedIn,
});

export default reducer;
