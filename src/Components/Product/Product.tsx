import * as React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import ic_Shipping from "../../Assets/ic_shipping.png";
import getSymbolFromCurrency from 'currency-symbol-map';
import { Product as ProductType } from "../../type";
import { useNavigate } from "react-router-dom";
import styles from '../../Assets/Styles/Components/Product/Product.module.css';

type Props = {
  product: ProductType,
}

export const Product: React.FunctionComponent<Props> = ({ product }) => {

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/items/' + product.id);
  }

  return (
    <Container className={styles.productContainer} onClick={goToDetail}>
      <Box className={`${styles.thumbnailSpace}`}>
        <img src={product.picture} className={`${styles.productThumbnail}`} alt="A product"/>
      </Box>
      <Box className={`${styles.productDataBox}`}>
        <Box>
          <Typography variant="body1" className={styles.currency}>
            {getSymbolFromCurrency(product.price.currency)}{product.price.amount}
            {product.free_shipping && <img src={ic_Shipping} className={`${styles.shippingIcon}`} alt="Can be shipped"/>}
          </Typography>
        </Box>
        <Box>
          <Typography className={styles.title} variant="body2" tabIndex={0} onKeyPress={e => e.key === 'Enter' && goToDetail()}>
              {product.title}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}