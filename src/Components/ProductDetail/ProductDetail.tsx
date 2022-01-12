import * as React from "react"
import { Box, Button, Container, Typography } from "@material-ui/core"
import getSymbolFromCurrency from 'currency-symbol-map'
import styles from './ProductDetail.module.css';
import { ProductDetails } from "../../type";

type Props = {
  productDetails: ProductDetails | null
}

const ProductDetail: React.FunctionComponent<Props> = (props) => {

  const { productDetails } = props;

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
      <Container>
        <Container className={`${styles.productContainer}`}>
          <Box style={{ paddingRight: "4vw" }}>
            <img src={productDetails?.item.picture} alt="A product"/>
          </Box>
          <Box className={`${styles.productDataBox}`}>
            <Box>
              <Typography variant="body1" style={{ fontSize: 12  }}>
                {productDetails && conditionParser(productDetails.item.condition)} {productDetails?.item.sold_quantity} vendidos
              </Typography>
              <Box style={{maxWidth: "fit-content"}}>
                <Typography variant="body2" style={{ fontWeight: 600, fontSize: 16  }}>
                  {productDetails?.item.title}
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontWeight: 500, fontSize: 26 }}>
                {productDetails && getSymbolFromCurrency(productDetails.item.price.currency)}{productDetails?.item.price.amount}
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
            {productDetails?.item.description}
          </Typography>
        </Box>
    </Container>
  )
}

export default ProductDetail