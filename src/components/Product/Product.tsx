import * as React from "react"
import { Box } from "@material-ui/core"

type Props = {
  product: Product,
}

export const Product: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <Box>
      {product.title}
    </Box>
  )
}