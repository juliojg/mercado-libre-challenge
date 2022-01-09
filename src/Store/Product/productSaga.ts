import { call, put, takeLatest } from 'redux-saga/effects'
import { MercadoLibreAction } from '../../type';
import { getProductsSucceed, getProductDetailSucceed, isFetching } from './productActionCreators';

function* fetchProducts(action: MercadoLibreAction): any {
  yield put(isFetching(true));
  const json = yield call(() =>
      fetch(`http://localhost:1338/api/items?q=${action.payload}`)
      .then(response => response.json())
      .then(myJson => myJson)
  );
  yield put(getProductsSucceed(json));
  yield put(isFetching(false));
}

function* fetchProductDetail(action: MercadoLibreAction): any {
  yield put(isFetching(true));
  const json = yield call(() =>
      fetch(`http://localhost:1338/api/items/${action.payload}`)
      .then(response => response.json())
      .then(myJson => myJson)
  );
  yield put(getProductDetailSucceed(json));
  yield put(isFetching(false));
}

function* mySaga() {
  yield takeLatest("GET_PRODUCTS", fetchProducts);
  yield takeLatest("GET_PRODUCT_DETAIL", fetchProductDetail);
}

export default mySaga;