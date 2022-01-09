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

export function getProductDetail(value: string) {
  return {
    type: productActionTypes.GET_PRODUCT_DETAIL,
    payload: value,
  }
}

export function getProductDetailSucceed(response: object) {
  return {
    type: productActionTypes.GET_PRODUCT_DETAIL_SUCCEEDED,
    payload: response,
  }
}