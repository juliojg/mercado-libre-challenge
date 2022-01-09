import * as React from "react"
import { Box, Button, Container, Typography } from "@material-ui/core"
import searchStyles from "../../Assets/Styles/Styles";
import getSymbolFromCurrency from 'currency-symbol-map'
import { getProductDetail } from "../../Store/Product/productActionCreators"
import { useParams } from "react-router-dom";
import { Dispatch, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { MercadoLibreState, ProductDetails } from "../../type";
import Loader from "../Loader/Loader";


const ProductDetail: React.FunctionComponent<{}> = () => {
  // Styles
  const classesSearchStyles = searchStyles();

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

  const conditionParser = (condition: string ) => {
    switch (condition) {
    case "not_specified":
      return "";
    case "new":
      return "Nuevo -";
    case "used":
      return "Usado -";
    }
  }

  return (
    isFetching ?
    <Loader/> :
    (productDetail &&
    <Container>
      <Container className={`${classesSearchStyles.productContainer}`}>
        <Box style={{ paddingRight: "4vw" }}>
          <img src={productDetail?.item.picture}/>
        </Box>
        <Box className={`${classesSearchStyles.productDataBox}`}>
          <Box>
            <Typography variant="body1" style={{ fontSize: 12  }}>
              {conditionParser(productDetail.item.condition)} {productDetail.item.sold_quantity} vendidos
            </Typography>
            <Box style={{maxWidth: "fit-content"}}>
              <Typography variant="body2" style={{ fontWeight: 600, fontSize: 16  }}>
                {productDetail.item.title}
              </Typography>
            </Box>
            <Typography variant="body1" style={{ fontWeight: 500, fontSize: 26 }}>
              {getSymbolFromCurrency(productDetail.item.price.currency)}{productDetail.item.price.amount}
            </Typography>
            <br/>
            <Button variant="contained" size="large" style={{backgroundColor: "dodgerblue", color: "white"}}> Comprar </Button>
          </Box>
        </Box>
      </Container>
      <br/>
      <Box>
      <Typography variant="h5">
        Descripción del producto
      </Typography>
      <br/>
      <Typography variant="body2" style={{color: "grey"}}>
        {productDetail.item.description}
      </Typography>
      </Box>
  </Container>
  )
  )
}

export default ProductDetail