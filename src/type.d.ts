
interface Product {
  id: number,
  title: string
}

type MercadoLibreState = {
  mlProducts: Product[],
}

type MercadoLibreAction = {
  type: string
  payload: any
}

type DispatchType = (args: ArticleAction) => ArticleAction