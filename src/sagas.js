import {
  takeLatest,
  select,
  call,
  put,
  fork
} from 'redux-saga/effects';
import {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure
} from './actions';
import {getShowId} from './reducers';
import {fetchShow} from './api';

function* onFetchShowRequest() {
  const showId = yield select(getShowId);
  try {
    const show = yield call(fetchShow, showId);
    yield put(fetchShowSuccess(show));
  } catch (error) {
    yield put(fetchShowFailure(error));
  }
}

function* onFetchShowWatch() {
  yield takeLatest(fetchShowRequest, onFetchShowRequest);
}

export default function*() {
  yield fork(onFetchShowWatch);
}
