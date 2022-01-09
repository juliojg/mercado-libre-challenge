import { ProductDetails, Products } from "../type"

export const responseToProductDetail: (rawResponse : any, description: string) => ProductDetails = (rawResponse, description) => {
  return {
    author: {
      name: 'Julio Joaquín',
      lastname: 'Güella'
    },
    item: {
        id: rawResponse['id'],
        title: rawResponse['title'],
        price: {
          currency: rawResponse['currency_id'],
          amount: rawResponse['prices'],
          decimals: 0
        },
        picture: rawResponse['thumbnail'],
        condition: rawResponse['condition'],
        free_shipping: rawResponse['shipping']['free_shipping'],
        sold_quantity: rawResponse['sold_quantity'],
        description: description
      }
    }
};

export const responseToProducts: (rawResponse : any) => Products = (rawResponse) => {
  return {
    author: {
      name: 'Julio Joaquín',
      lastname: 'Güella'
    },
    categories: [...new Set<string>(rawResponse['results'].map((product : any) => product['category_id']))],
    items: rawResponse['results'].map((product : any) => {
      return {
        id: product['id'],
        title: product['title'],
        price: {
          currency: ((product['prices']['prices']).filter((p : any) => p['type'] == 'standard'))[0]['currency_id'],
          amount: ((product['prices']['prices']).filter((p : any) => p['type'] == 'standard'))[0]['amount'],
          decimals: 0
        },
        picture: product['thumbnail'],
        condition: product['condition'],
        free_shipping: product['shipping']['free_shipping']
      }
    })
  }
}