import { call, put, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';

import { RESTAURANT_URL, IMAGE_URL } from 'containers/App/constants';
import { GET_IMAGES } from './constants';
import { imagesError, imagesSuccess, restaurantsSuccess } from './actions';

function* handleGetAppData() {
  const optionsForImages = {
    url: IMAGE_URL,
    method: 'get',
  };
  try {
    const response = yield call(request, optionsForImages);
    yield put(imagesSuccess(response));
  } catch (e) {
    yield put(imagesError(e));
  }

  yield delay(100);

  const options = {
    url: RESTAURANT_URL,
    method: 'get',
  };
  try {
    const response = yield call(request, options);
    yield put(restaurantsSuccess(response));
  } catch (e) {
    yield put(imagesError(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_IMAGES, handleGetAppData);
}
