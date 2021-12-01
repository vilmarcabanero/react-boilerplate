import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* loginPageDefault() {
  yield call();
}

function* makeGetLoginPage() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getLoginPage');
  yield put(Actions.Creators.setLoginPage(response.data));
}

export default function* loginPageSaga() {
  yield takeLatest(Actions.Types.DEFAULT, loginPageDefault);
  yield takeLatest(Actions.Types.GET_LOGIN_PAGE, makeGetLoginPage);
}
