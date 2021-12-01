import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* registerPageDefault() {
  yield call();
}

function* makeGetRegisterPage() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getRegisterPage');
  yield put(Actions.Creators.setRegisterPage(response.data));
}

export default function* registerPageSaga() {
  yield takeLatest(Actions.Types.DEFAULT, registerPageDefault);
  yield takeLatest(Actions.Types.GET_REGISTER_PAGE, makeGetRegisterPage);
}
