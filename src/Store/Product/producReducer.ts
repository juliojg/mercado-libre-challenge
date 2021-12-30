import * as productActionTypes from "./productActionTypes"


const mercadolibreState: MercadoLibreState = {
  mlProducts: []
}

const reducer = (
  state: MercadoLibreState = mercadolibreState,
  action: MercadoLibreAction
): MercadoLibreState => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS_SUCCEEDED:
      return {...state,
        mlProducts: action.payload['results']
      }
    }
  return state
}

export default reducer