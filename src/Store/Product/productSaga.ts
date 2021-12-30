import { call, put, takeLatest } from 'redux-saga/effects'
import { getProductsSucceed } from './productActionCreators';

function* fetchProducts(action: MercadoLibreAction): any {
  const json = yield call(() =>
      fetch(`http://localhost:1338/sample/api/items?q=${action.payload}`)
      .then(response => response.json())
      .then(myJson => myJson)
  );
  yield put(getProductsSucceed(json));
}

function* mySaga() {
  yield takeLatest("GET_PRODUCTS", fetchProducts);
}

export default mySaga;