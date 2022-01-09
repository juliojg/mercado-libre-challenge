import React from "react";
import { getProducts } from "../../Store/Product/productActionCreators"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import ic_Search from "../../Assets/ic_Search.png"
import Logo_ML from "../../Assets/Logo_ML.png"
import { Container, Box } from "@material-ui/core"
import searchStyles from "../../Assets/Styles/Styles";
import { useNavigate } from 'react-router-dom';


export const Search : React.FunctionComponent<{}> = () => {
  // Styles
  const classesSearchStyles = searchStyles();

  // State
  const [searchValue, setSearchValue] = React.useState("");

  const navigate = useNavigate();

  function handleSearch() {
    navigate('/items?search=' + searchValue);
  }

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
          <button className={`${classesSearchStyles.inputButton}`} onClick={ () => handleSearch()}>
            <img src={ic_Search}/>
          </button>
        </Box>
      </Container>
    </Container>
  )
}