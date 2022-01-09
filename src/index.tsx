import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import sampleSaga from './Store/Product/productSaga'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import App from "./App"
import reducer from "./Store/Product/producReducer"
import { ProductList } from "./Components/ProductList/ProductList";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { DispatchType, MercadoLibreAction, MercadoLibreState } from "./type";
import { Search } from "./Components/Search/Search";

const sagaMiddleware = createSagaMiddleware()


const store: Store<MercadoLibreState, MercadoLibreAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sampleSaga);

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes>
          <Route path={'/items'} element={<ProductList />} />
          <Route path={'/items/:id'} element={<ProductDetail/>} />
        </Routes>
      </App>
    </Router>
  </Provider>,
  rootElement
)
