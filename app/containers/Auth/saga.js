import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* authDefault() {
  yield call();
}

function* makeGetAuth() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getAuth');
  yield put(Actions.Creators.setAuth(response.data));
}
function* makeGetUser() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getUser');
  yield put(Actions.Creators.setUser(response.data));
}

export default function* authSaga() {
  yield takeLatest(Actions.Types.DEFAULT, authDefault);
  yield takeLatest(Actions.Types.GET_AUTH, makeGetAuth);
  yield takeLatest(Actions.Types.GET_USER, makeGetUser);
}
