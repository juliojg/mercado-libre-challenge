import * as React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import searchStyles from "../../Assets/Styles/Styles";
import ic_Shipping from "../../Assets/ic_shipping.png";
import getSymbolFromCurrency from 'currency-symbol-map';
import { Product as ProductType } from "../../type";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductType,
}

export const Product: React.FunctionComponent<Props> = ({ product }) => {
  // Styles
  const classesSearchStyles = searchStyles();

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/items/' + product.id);
  }

  return (
    <Container className={`${classesSearchStyles.productContainer}`} onClick={goToDetail}>
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