import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Product } from "../Product/Product"
import { Container } from "@material-ui/core"
import { MercadoLibreState, Products, Product as ProductType } from "../../type"
import { useParams, useSearchParams } from "react-router-dom"
import { getProducts } from "../../Store/Product/productActionCreators"
import { Dispatch } from "redux"
import Loader from "../Loader/Loader"

const ProductList: React.FunctionComponent = () => {
  // Selectors
  const products: Products | null = useSelector(
    (state: MercadoLibreState) => state.mlProducts,
    shallowEqual
  )
  const isFetching: boolean = useSelector(
    (state: MercadoLibreState) => state.isFetching,
    shallowEqual
  )

  // Dispatcher
  const dispatch: Dispatch<any> = useDispatch()
  const fetchProducts = () => dispatch(getProducts(searchValue ? searchValue : ""));

  // Params
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  React.useEffect(() => { fetchProducts() }, [searchValue]);

  return (
    isFetching ?
    <Loader/>
    :
    <Container maxWidth='xl'>
      {(products !== null) && (products.items.slice(0, 4)).map((p: ProductType) => (
        <Product product={p} key={p.id}/>
      ))}
    </Container>
  )
}

export default ProductList;