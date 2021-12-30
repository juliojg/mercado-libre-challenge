interface IArticle {
  id: number
  title: string
  body: string
}

interface Product {
  id: number,
  title: string
}

type GeneralState = {
  articleState: ArticleState,
  mercadolibreState: MercadoLibreState
}

type MercadoLibreState = {
  mlProducts: Product[],
}

type MercadoLibreAction = {
  type: string
  payload: any
}

type

type DispatchType = (args: ArticleAction) => ArticleAction