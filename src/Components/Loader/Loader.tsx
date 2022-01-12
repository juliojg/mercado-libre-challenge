import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import styles from './Loader.module.css'

export default function Loader() {
  return (
    <>
      <Box className={styles.loader}> <CircularProgress size="5rem" /> </Box>
    </>);
}
