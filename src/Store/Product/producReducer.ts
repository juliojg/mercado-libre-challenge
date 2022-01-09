import { MercadoLibreAction, MercadoLibreState } from "../../type"
import * as productActionTypes from "./productActionTypes"


const mercadolibreState: MercadoLibreState = {
  mlProducts: null,
  currentProductDetail: null
}

const reducer = (
  state: MercadoLibreState = mercadolibreState,
  action: MercadoLibreAction
): MercadoLibreState => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS_SUCCEEDED:
      return {...state,
        mlProducts: action.payload
      }
    case productActionTypes.GET_PRODUCT_DETAIL_SUCCEEDED:
      return {...state,
        currentProductDetail: action.payload
      }
    }
  return state
}

export default reducer