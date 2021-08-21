import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { RiTruckLine } from "react-icons/ri";
import { RiBankCardLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";
import PaymentCards from "../PaymentMethod/PaymentCards";
import './index.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
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
function BuyingOverview(props) {
  const classes = useStyles();
  const paymentCards = PaymentCards;

  const checkoutCrypto = useSelector(state =>state.checkoutCrypto);
const paymentCard = useSelector(state=>state.paymentCard);
const inputAmount = useSelector(state=>state.inputAmount);

const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in portfolio serverurl",serverURL);
console.log("in portfolio userId",userId);

const dispatch = useDispatch();
 function clickHandler(){
  dispatch(addCheckoutTransactionType('BUY'));
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
    "transaction_type": "BUY",
    "payment_mode": "WALLET"

      })
})
 // .then(res => {console.log(res.json())})
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


  const history = useHistory();

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
            <Typography variant="caption">You are buying</Typography>
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
                  <RiBankCardLine />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="caption">Payment method</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      Visa crdit ....8845
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
                     0.001 {checkoutCrypto.id}
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
                  <RiWallet3Line />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="caption">Deposit to</Typography>
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
              <Button variant="contained" color="primary" onClick={clickHandler} fullWidth>BUY NOW</Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  
  
  );
}
export default BuyingOverview;
