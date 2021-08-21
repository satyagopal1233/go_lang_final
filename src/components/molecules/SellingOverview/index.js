import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { RiTruckLine } from "react-icons/ri";
import { RiBitCoinLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";
import PaymentCards from "../PaymentMethod/PaymentCards";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router';
import { addCheckoutTransactionType, addChekoutCurrencyToStore } from "../../../redux/CryptoActions";

const useStyles = makeStyles({
  root: {
    width: "527px",
    height: "646px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    // paddingLeft: "24px",
    marginTop: "25px",
    position: "fixed",
  },
  item: {
    height: "215px",
   //border: "solid",
    width: "527px",
    borderRadius:"1px",
    boxShadow: "0px 0px 5px #ccc",
  },
  test: {
    height: "215px",
    border: "solid",
    width: "527px",
  },
});
function SellingOverview(props) {
  const classes = useStyles();
  const checkoutCrypto = useSelector(state =>state.checkoutCrypto);
  const inputAmount = useSelector(state=>state.inputAmount);
  const dispatch = useDispatch();
  const history = useHistory();
  const serverURL = useSelector(state=>state.serverURL);
  const userId = useSelector(state=>state.userId);
  console.log("in so serverurl",serverURL);
  console.log("in so userId",userId);
  function clickHandler(){
   // alert("hi");
    dispatch(addCheckoutTransactionType('SELL'));
    dispatch(addChekoutCurrencyToStore(inputAmount/checkoutCrypto.price));
    console.log("checkoutCrypto.id",checkoutCrypto.id);
    console.log("inputAmount",inputAmount);


    fetch(serverURL+'/transactions', {
      method: 'POST',
      body: JSON.stringify({
        "user_id" : userId,
       "currency_id": checkoutCrypto.id,
        "currency_code": "USD",
        "total_value": parseInt(inputAmount),
        "transaction_type": "SELL",
        "payment_mode": "WALLET"
    
          })
    })
    .then(res => {
      console.log(res);
      // enter you logic when the fetch is successful
      history.push("/showPaymentSuccessfulPage");
     })
     .catch(error => {
     // enter your logic for when there is an error (ex. error toast)
      console.log(error)
     })



   
    
   }

  return (
   
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.item}
          justifyContent="space-evenly"
        >
          <Grid item>
            <Typography variant="caption">You are selling</Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h6">
                {parseFloat(inputAmount/checkoutCrypto.price).toFixed(6)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{checkoutCrypto.id}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              1{checkoutCrypto.id}=<NumberFormat value={checkoutCrypto.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    
      <Grid item>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="space-evenly"
          className={classes.item}
        >
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton>
                  <RiBitCoinLine />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="caption">Paying through</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                    {checkoutCrypto.name} wallet
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton>
                  <RiTruckLine />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="caption">Delivery fees</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      delivery selected value
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" >
              <Grid item style={{ paddingLeft: '20px'}}>
                <img width="12px" height="18px" src="data:image/png;base64,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"/>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start" style={{ paddingLeft: '20px'}}>
                  <Grid item>
                    <Typography variant="caption">Deposit to</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      Rupee Coin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          className={classes.item}
        >
          <Grid item>
            <Grid container alignItems="center"  className="contacts">
              <Grid item>
                <Typography variant="overline">
                {parseFloat(inputAmount/checkoutCrypto.price).toFixed(6)}
                </Typography>
              </Grid>
              <Grid item className={classes.title}>
                <Typography variant="overline">{checkoutCrypto.id}</Typography>
              </Grid>
              <Grid item item className="dots">
               .
              </Grid>
              <Grid item className={classes.title}>
                <Typography variant="overline">{inputAmount}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" className="contacts">
             
              <Grid item>
                <Typography variant="overline">Minet Fees</Typography>
              </Grid>
              <Grid item item className="dots">
              .
              </Grid>
              <Grid item>
                <Typography variant="overline">1000</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" className="contacts">
             
              <Grid item >
                <Typography variant="body1">Total</Typography>
              </Grid>
              <Grid item className="dots">
               .
              </Grid>
              <Grid item >
                <Typography variant="body1">{parseInt(inputAmount)+parseInt(1000)}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
              <Button variant="contained" color="primary" size="large"  onClick={clickHandler} fullWidth>SELL NOW</Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  
  
  );
}
export default SellingOverview;
