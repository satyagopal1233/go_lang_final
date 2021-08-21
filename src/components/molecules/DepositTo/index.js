import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";
import USDCoin from '../../../../public/images/USD Coin.png'

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
function DepositTo(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      
    >
      <Grid item>
        <Typography variant="body1">Deposit to</Typography>
      </Grid>

      <Grid item >
        <Grid container direction="row"  justifyContent="flex-start" alignItems="center" className={classes.item}>
          <div> <img width="32px" height="32px" src={USDCoin}/> </div>
          <Grid item  className={classes.flexItem}>
           
            <Typography variant="caption" >Dollar Coin (cash)</Typography>
          </Grid>
          <Grid item>
          <Typography variant="caption" >Default</Typography>
         
          </Grid>
        </Grid>
      </Grid>

     
    </Grid>
  );
}
export default DepositTo;
