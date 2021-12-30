import * as productActionTypes from "./productActionTypes"


export function getProducts(value: string) {
  return {
    type: productActionTypes.GET_PRODUCTS,
    payload: value,
  }
}

export function getProductsSucceed(response: object) {
  return {
    type: productActionTypes.GET_PRODUCTS_SUCCEEDED,
    payload: response,
  }
}