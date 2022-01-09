import * as React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import searchStyles from "../../Assets/Styles/Styles";
import ic_Shipping from "../../Assets/ic_shipping.png";
import getSymbolFromCurrency from 'currency-symbol-map';
import { Product as ProductType } from "../../type";

type Props = {
  product: ProductType,
}


export const Product: React.FunctionComponent<Props> = ({ product }) => {
  const classesSearchStyles = searchStyles();


  return (
    <Container className={`${classesSearchStyles.productContainer}`}>
      <Box className={`${classesSearchStyles.thumbnailSpace}`}>
        <img src={product.picture} className={`${classesSearchStyles.productThumbnail}`}/>
      </Box>
      <Box className={`${classesSearchStyles.productDataBox}`}>
        <Box>
          <Typography variant="body1">
            {getSymbolFromCurrency(product.price.currency)}{product.price.amount}
            {product.free_shipping && <img src={ic_Shipping} className={`${classesSearchStyles.shippingIcon}`}/>}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">
            {product.title}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}