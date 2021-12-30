import * as React from "react"
import { Search } from "./components/Search/Search"
import { ProductList } from "./components/ProductList/ProductList"
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