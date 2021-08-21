import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideNavBar from "../../organisms/SideNavBar/index";
import TopNavBar from "../../organisms/TopNavBar";
import SearchItem from "../../molecules/SearchItem/index";
import SelectComponent from "../../molecules/SelectComponent/index";
import TradeCardDetails from "../../organisms/TradeCardDetails/index";
import Footer from "../../organisms/Footer/index";
import TradeCardDisplayHeaders from "../../molecules/TradeCardsDisplayHeaders";
import { Button, Typography } from "@material-ui/core";
import { RiCheckFill } from "react-icons/ri";
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
    border: "solid",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
    //height: "1000vh",
    height: "1006px",
    //  border: "solid",
  },
  sideNav: {
    // backgroundColor: '#e7fce0',
    height: "1088px",
  },
  banner: {
    // backgroundColor: '#B2BEB5',
    height: "82px",
    width: "1287px",
    // border:"solid",
  },
  footer: {
    // backgroundColor: '#B2BEB5',
    height: "106px",
    width: "1287px",
    // border:"solid",
  },
  content: {
    backgroundColor: "white",
    // height:"560px",
    //flexGrow:1,
    height: "680px",
    //  border: "solid",
    // margingTop: "10px",
    width: "400px",
    marginLeft: "500px",
    marginTop: "100px",
  },
  rightPanel: {
    //smarginLeft:'50%',
    backgroundColor: "#71fed4",
    //  marginTop:'100px',
  },
  rightAlignment: {
    backgroundColor: "#e7fce0",
    marginTop: "5px",
    height: "100vh",
  },
  middleContainer: {
    marginTop: "10px",
    width: "100%",
    height: "1006px",
    //height: "100%",
    //  border:"solid",
    // backgroundColor:"#FAFCFF"
  },
  searchItemStyle: {
    flexGrow: 1,
  },
  filterboxStyle: {
    height: "500px",
  },
  paddingItem: {
    paddingLeft: "24px",
  },
  TradeCardStyles: {
    //height: "550px",
  },
  imagePadding: {
    padding: "10px",
    alignItems: "center",
    width: "25px",
    height: "25px",
    color: "#20B03F",
    background: "#E9F7EC",
    borderRadius: "100px",
  },
  imagebox: {
    // paddingLeft:'4%',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // width: '44px',
    // height: '44px',
    // background: '#E9F7EC',
    // borderRadius: '100px',
  },
}));


const PaymentSuccessfulPage = ({
  currencyUnits,
  currencyCode,
  transactionType,
}) => {
  const style = useStyle();
  const history = useHistory();

  const chekoutCurrency= useSelector(state=>state.chekoutCurrency)
  const chekoutTransactionType= useSelector(state=>state.chekoutTransactionType)
  const checkoutCrypto= useSelector(state=>state.checkoutCrypto)
  console.log(chekoutCurrency,"chekoutCurrency");
  console.log(chekoutTransactionType,"chekoutTransactionType");

   

  return (
    <div clasName={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>
          <Grid item className={style.sideNav}>
            <SideNavBar />
          </Grid>

          <Grid item container direction="column" xs={10}>
            <Grid item className={style.banner}>
              <TopNavBar label={"Checkout"} />
            </Grid>
            <Grid item className={style.content}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={5}
               
               
              >
                <Grid item className={style.imagebox}>
                  <RiCheckFill className={style.imagePadding} />
                </Grid>
                <Grid item >
                  <Typography variant="h1">
                    {parseFloat(chekoutCurrency).toFixed(6)}
                    {checkoutCrypto.id}
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography variant="body2">
                  {chekoutTransactionType === "BUY" && 
                    <center>
                      purchase is completed please check your balance in your
                      crypto wallet
                    </center>
                  }
                    {chekoutTransactionType === "SELL" && 
                    <center>
                      sell is completed please check your balance in your
                      Rupee coin
                    </center>
                  }  
                  </Typography>
                </Grid>
             
                <Grid item  >
                  <Grid container>
                    {chekoutTransactionType === "BUY" && 
                      <>
                        <Grid item >
                          <Button variant="outlined" color="primary">
                            BUY CRYPTO
                          </Button>
                        </Grid>
                        <Grid item style={{marginLeft:"70px"}}>
                          <Button variant="contained" color="primary"  onClick={()=>history.push("/showUserWalletScreen")}>
                            GO TO WALLET
                          </Button>
                        </Grid>
                      </>
                    }
                    {chekoutTransactionType === "SELL" && 
                      <>
                        <Grid item>
                          <Button variant="outlined" color="primary">
                            SELL CRYPTO
                          </Button>
                        </Grid>
                        <Grid item style={{marginLeft:"70px"}}>
                          <Button variant="contained" color="primary"  onClick={()=>history.push("/showUserWalletScreen")}>
                          GO TO WALLET
                          </Button>
                        </Grid>
                      </>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={style.footer}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PaymentSuccessfulPage;
