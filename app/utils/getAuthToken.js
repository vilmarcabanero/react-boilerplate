import { select } from 'redux-saga/effects';

export function* getAuthToken() {
  const selectAuthDomain = state => state.get('auth');
  const AuthState = yield select(selectAuthDomain);
  return AuthState.toJS().token;
}

export default getAuthToken;
