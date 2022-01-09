import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: 700 } }));

export default function Loader() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}> <CircularProgress size="5rem" /> </Box>
    </>);
}
