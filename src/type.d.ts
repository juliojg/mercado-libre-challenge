
export interface Product {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },

  picture: string,
  condition: string,
  free_shipping: Boolean
}

export type Products = {
  author: {
    name: string,
    lastname: string,
  },
  categories: string[],
  items: Product[]
}

export interface ProductDetails {
    author: {
      name: string,
      lastname: string
    },
    item: {
      id: string,
      title: string,
      price: {
        currency: string,
        amount: number,
        decimals: number,
      },
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
    }
}


type MercadoLibreState = {
  mlProducts: Products | null,
  currentProductDetail: ProductDetails | null
}

type MercadoLibreAction = {
  type: string
  payload: any
}

type DispatchType = (args: MercadoLibreAction) => MercadoLibreAction