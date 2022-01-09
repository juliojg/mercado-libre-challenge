import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Product } from "../Product/Product"
import { Container } from "@material-ui/core"
import { MercadoLibreState, Products, Product as ProductType } from "../../type"
import { useParams, useSearchParams } from "react-router-dom"
import { getProducts } from "../../Store/Product/productActionCreators"
import { Dispatch } from "redux"

export const ProductList: React.FunctionComponent = () => {

  const products: Products | null = useSelector(
    (state: MercadoLibreState) => state.mlProducts,
    shallowEqual
  )

  const fetchProducts = () => dispatch(getProducts(searchValue ? searchValue : ""));

  const dispatch: Dispatch<any> = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search');

  React.useEffect(() => { fetchProducts() }, [searchValue]);


  return (
    <Container maxWidth='xl'>
      {(products !== null) && (products.items.slice(0, 4)).map((p: ProductType) => (
        <Product product={p} key={p.id}/>
      ))}
    </Container>
  )
}