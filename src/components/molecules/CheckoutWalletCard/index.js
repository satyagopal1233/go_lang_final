import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { addPaymentCardToStore } from "../../../redux/CryptoActions";
import USDCoin from '../../../../public/images/USD Coin.png'


const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
    width: "663px",
    height: "74px",
    //maxHeight: "74px",
   // marginBottom: "10px",
    // padding : '1.5%',
    //padding: "10px",
    borderRadius: "1px",
    // "&:hover": {
    //  borderColor: "#5ac568",
    //},
    boxShadow: "0px 0px 5px #ccc",
  },
  flexItem:{
      flexGrow:1
  }
  
 });

function CheckoutWalletCard() {
 
  const classes = useStyles();
 


  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      direction="row"
      //spacing={2}
    >
      <Grid item>
      <div> <img width="32px" height="32px" src={USDCoin}/> </div>
      </Grid>
      <Grid item className={classes.flexItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="caption2">USD Coin (Cash)</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Total balance - </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <Typography variant="caption2"> Default</Typography>
      </Grid>
    </Grid>

    // </div>
  );
}
export default CheckoutWalletCard;
