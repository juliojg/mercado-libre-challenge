import React from "react";
import { getProducts } from "../../Store/Product/productActionCreators"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import ic_Search from "../../Assets/ic_Search.png"
import Logo_ML from "../../Assets/Logo_ML.png"
import { Container, Box } from "@material-ui/core"
import searchStyles from "../../Assets/Styles/Styles";


export const Search : React.FunctionComponent<{}> = ({}) => {


  const [searchValue, setSearchValue] = React.useState("");

  const fetchProducts = () => dispatch(getProducts(searchValue));

  const dispatch: Dispatch<any> = useDispatch()

  const classesSearchStyles = searchStyles();


  return (
    <Container maxWidth="xl" className={`${classesSearchStyles.containerClass}`}>
      <Container className={`${classesSearchStyles.displaySearchBar} ${classesSearchStyles.containerClass}`}>
        <Box>
          <img src={Logo_ML}/>
        </Box>
        <Box m={2}>
          <input placeholder="Nunca dejes de buscar"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className={`${classesSearchStyles.inputSearch}`}
          />
          <button className={`${classesSearchStyles.inputButton}`} onClick={ () => fetchProducts()}>
            <img src={ic_Search}/>
          </button>
        </Box>
      </Container>
    </Container>
  )
}