import React from "react";
import ic_Search from "../../Assets/ic_Search.png"
import Logo_ML from "../../Assets/Logo_ML.png"
import { Container, Box } from "@material-ui/core"
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css'


export const Search : React.FunctionComponent<{}> = () => {

  // State
  const [searchValue, setSearchValue] = React.useState("");

  const navigate = useNavigate();

  function handleSearch() {
    navigate('/items?search=' + searchValue);
  }

  return (
    <Container maxWidth="xl" className={`${styles.containerClass}`}>
      <Container className={`${styles.displaySearchBar} ${styles.containerClass}`}>
        <Box>
          <img src={Logo_ML} alt="Mercado Libre logo"/>
        </Box>
        <Box m={2}>
          <input placeholder="Nunca dejes de buscar"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className={`${styles.inputSearch}`}
                onKeyPress={e => e.key === 'Enter' && handleSearch()}
          />
          <button className={`${styles.inputButton}`} onClick={ () => handleSearch()}>
            <img src={ic_Search}  alt="Search button"/>
          </button>
        </Box>
      </Container>
    </Container>
  )
}