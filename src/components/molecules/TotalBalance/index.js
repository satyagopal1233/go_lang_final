import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "710px",
    height: "146px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft: "24px",
    marginTop: "25px",
  },
  item: {
    width: "663px",
    height: "74px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft:"10px",
    paddingRight:"10px",
    
    
  },
  flexItem:{
      flexGrow:1
  }
});
function TotalBalance(props) {
  const checkoutCrypto = useSelector(state =>state.checkoutCrypto);
  const inputAmount = useSelector(state=>state.inputAmount);
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      
    >
      <Grid item>
        <Typography variant="body1">Total Balance</Typography>
      </Grid>

      <Grid item >
        <Grid container direction="row"  justifyContent="flex-start" alignItems="center" spacing={2} className={classes.item}>
           <div><img src={checkoutCrypto.logo_url} height="32px" width="32px"/> </div>
          <Grid item  className={classes.flexItem}>
            
            <Typography variant="caption" >{checkoutCrypto.name}</Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" >{inputAmount/checkoutCrypto.price}</Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" >{props.id}</Typography>
          </Grid>
        </Grid>
      </Grid>

     
    </Grid>
  );
}
export default TotalBalance;
