import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import saga from './Store/Product/productSaga'
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import reducer from "./Store/Product/productReducer"
import { DispatchType, MercadoLibreAction, MercadoLibreState } from "./type";
import { Suspense } from "react";
import Loader from "./Components/Loader/Loader";

const ProductList = React.lazy(() => import('./Containers/ProductList/ProductList'));
const ProductDetailContainer = React.lazy(() => import('./Containers/ProductDetailContainer/ProductDetailContainer'));

const sagaMiddleware = createSagaMiddleware()


const store: Store<MercadoLibreState, MercadoLibreAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(saga);

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
      <Router>
        <App>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path={'/'} element={<></>}/>
              <Route path={'/items'} element={<ProductList />} />
              <Route path={'/items/:id'} element={<ProductDetailContainer />} />
            </Routes>
          </Suspense>
        </App>
      </Router>
  </Provider>,
  rootElement
)
