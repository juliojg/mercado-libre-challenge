import { call, put, takeLatest } from 'redux-saga/effects'
import { MercadoLibreAction } from '../../type';
import { getProductsSucceed, getProductDetailSucceed } from './productActionCreators';

function* fetchProducts(action: MercadoLibreAction): any {
  const json = yield call(() =>
      fetch(`http://localhost:1338/sample/api/items?q=${action.payload}`)
      .then(response => response.json())
      .then(myJson => myJson)
  );
  yield put(getProductsSucceed(json));
}

function* fetchProductDetail(action: MercadoLibreAction): any {
  const json = yield call(() =>
      fetch(`http://localhost:1338/sample/api/items/${action.payload}`)
      .then(response => response.json())
      .then(myJson => myJson)
  );
  yield put(getProductDetailSucceed(json));
}

function* mySaga() {
  yield takeLatest("GET_PRODUCTS", fetchProducts);
  yield takeLatest("GET_PRODUCT_DETAIL", fetchProductDetail);
}

export default mySaga;