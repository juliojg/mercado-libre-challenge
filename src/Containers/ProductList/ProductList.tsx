import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Product } from "../../Components/Product/Product"
import { Container } from "@material-ui/core"
import { MercadoLibreState, Products, Product as ProductType } from "../../type"
import { useSearchParams } from "react-router-dom"
import { getProducts } from "../../Store/Product/productActionCreators"
import { Dispatch } from "redux"
import Loader from "../../Components/Loader/Loader"
import { ErrorMessage } from "../../Containers/ErrorMessage/ErrorMessage"

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

  const ITEMS_PER_PAGE = 4;

  return (
    isFetching ?
    <Loader/>
    :
    <Container maxWidth='xl'>
      {products && (products.items.slice(0, ITEMS_PER_PAGE)).map((p: ProductType) => (
        <Product product={p} key={p.id}/>
      ))}
    <ErrorMessage/>
    </Container>
  )
}

export default ProductList;