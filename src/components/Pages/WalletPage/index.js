import React, { useCallback, useState } from "react";

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
import DisplayWalletTransactionalCards from "../../molecules/DisplayWalletTranascationalCards";
import WalletCurrencyCard from "../../molecules/WalletCurrencyCard";
import CheckoutTabs from "../../molecules/CheckoutTabs";
import { Typography } from "@material-ui/core";
import PriceCorrelation from "../../organisms/PriceCorrelation";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
    height: "100%",
    //height:'1006px'
  },
  sideNav: {
    // backgroundColor: '#e7fce0',
    height: "1088px",
  },
  banner: {
    // backgroundColor: '#B2BEB5',
    height: "82px",
    width: "1286px",
    // border:"solid",
  },
  footer: {
    // backgroundColor: '#B2BEB5',
    height: "106px",
    width: "1286px",
    // border:"solid",
  },
  content: {
    backgroundColor: "white",
    // height:"560px",
    //flexGrow:1,
   // maxHeight: "1006px",
    //border: "solid",
    // margingTop: "10px",
    width: "1286px",
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
    width: "1286px",
    //height: "100%",
   // border: "solid",
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
  totalAmountStyle: {
    background: "#E8E8F7",
    width: "1286px",
    height: "86px",
    //paddingLeft:'10px',
  },
  walletCards:{
    height: "700px",
    overflowX: 'visible', 
    overflowY: 'scroll',
    width: "1286px",
  }

}));

const allSelectItems1 = [
  { id: 1, name: "1hr" },
  { id: 2, name: "24hr" },
  { id: 3, name: "1w" },
  { id: 4, name: "1m" },
  { id: 5, name: "1y" },
];

const allSelectItems2 = [
  { id: 1, name: "Tradable assets" },
  { id: 2, name: "Watchlist" },
  { id: 3, name: "All assets" },
  { id: 4, name: "Top gainers" },
  { id: 5, name: "Top losers" },
];
const WalletPage = (props) => {

  const crypto = useSelector(state => state.crypto);
  console.log("in walletpage="+crypto.name);
  console.log("in walletpage="+crypto.gains);
  const style = useStyles();

  const [walletType, setWalletType] = useState(0);
  const callback = useCallback((walletType) => {
     //alert(walletType);
    setWalletType(walletType);
  //  alert(checkoutType);
  }, []);
  const job = {
    logo:
      "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    currency: "Bitcoin",
    change: "1.06",
    currencyType: "BTC",
    marketCap: "60.1T",
    volume: "24.2T",
    circulatingSupply: "18.8M",
    currencyUnits:'0.0234510',
    rupeeAmount:'85553'
  };

  return (
    <div clasName={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>
          <Grid item className={style.sideNav}>
            <SideNavBar />
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={10}
            className={style.middleContainer}
            
          >
            <Grid item className={style.banner}>
              <TopNavBar label={"Trade"} />
            </Grid>
            <br/>
            <Grid item className={style.content}>
              <Grid container direction="column" >
              <Grid item >
              <WalletCurrencyCard job={crypto} />
              </Grid>
              <br/>
              <Grid item >
              <CheckoutTabs parentCallback={callback} label1={"Overview"} label2={"Wallet"} />
              </Grid>
              </Grid>
            </Grid>
            {walletType === 0 && 

              <PriceCorrelation currentPercentage="+8.06" currentAmount="₹ 11,900,204"/>

            } 


            {walletType === 1 && 
            <>
            <Grid item >
              <Grid container alignItems="center" className={style.totalAmountStyle}>
                <Grid item style={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">Total balance</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{job.currencyUnits}{job.currencyType}({job.rupeeAmount})</Typography>
                </Grid>
              </Grid>
            </Grid>
            <br/>
            <Grid item className={style.content}>
              <Grid container>
                <Grid item className={style.searchItemStyle}>
                  <SearchItem />
                </Grid>
                <Grid item>
                  <SelectComponent
                    allSelectItems={allSelectItems1}
                    defaultSelect="24hr"
                  />
                </Grid>
               </Grid>
            </Grid>
            <br/>
            <Grid item className={style.walletCards}>
              <DisplayWalletTransactionalCards />
            </Grid>
            </>
             }
            <br/>
            <Grid item className={style.footer}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default WalletPage;
