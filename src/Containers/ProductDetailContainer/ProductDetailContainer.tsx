import { Container } from "@material-ui/core";
import { Dispatch, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Loader from "../../Components/Loader/Loader";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import { getProductDetail } from "../../Store/Product/productActionCreators";
import { ProductDetails, MercadoLibreState } from "../../type";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

const ProductDetailContainer: React.FunctionComponent<{}> = () => {
// Selectors
const productDetail: ProductDetails | null = useSelector(
    (state: MercadoLibreState) => state.currentProductDetail,
    shallowEqual
)
const isFetching: boolean = useSelector(
    (state: MercadoLibreState) => state.isFetching,
    shallowEqual
)

// Params
const { id } = useParams();

// Dispatcher
const dispatch: Dispatch<any> = useDispatch()
const fetchProductDetail = () => dispatch(getProductDetail(id ? id : ""));

useEffect(() => { fetchProductDetail() }, [id]);

return (
    isFetching ?
    <Loader/> :
    <Container>
        { productDetail && <ProductDetail productDetails={productDetail}/> }
        <ErrorMessage/>
    </Container>
)
}

export default ProductDetailContainer