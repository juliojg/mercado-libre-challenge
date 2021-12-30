import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import sampleSaga from './Store/Product/productSaga'

import App from "./App"
import reducer from "./Store/Product/producReducer"

const sagaMiddleware = createSagaMiddleware()


const store: Store<MercadoLibreState, MercadoLibreAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sampleSaga);

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
