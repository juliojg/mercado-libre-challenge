import * as React from "react"
import { useSelector, shallowEqual } from "react-redux"
import { Product } from "../Product/Product"
import { Container } from "@material-ui/core"

export const ProductList: React.FunctionComponent = () => {

  const products: any[] = useSelector(
    (state: MercadoLibreState) => state.mlProducts,
    shallowEqual
  )

  return (
    <Container>
      {products.map((p: Product) => (
        <Product product={p} key={p.id}/>
      ))}
    </Container>
  )
}