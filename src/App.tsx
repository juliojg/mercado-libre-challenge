import * as React from "react"
import { Search } from "./Components/Search/Search"
import { ProductList } from "./Components/ProductList/ProductList"
import { Paper } from "@material-ui/core"

const App: React.FunctionComponent = () => {
  return (
    <Paper elevation={0}>
      <Search/>
      <ProductList/>
    </Paper>
  )
}

export default App