import * as React from "react"
import { Search } from "./Components/Search/Search"
import { Container, Paper } from "@material-ui/core"

const App: React.FunctionComponent = (props) => {
  return (
    <Paper elevation={0}>
      <Container maxWidth='xl'>
        <Search/>
        {props.children}
      </Container>
    </Paper>
  )
}

export default App