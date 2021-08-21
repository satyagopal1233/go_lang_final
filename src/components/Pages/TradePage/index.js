import React, { useEffect } from "react";

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
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';

 

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
    //height: "1000vh",
    height:'1006px'
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
  footer :{
    // backgroundColor: '#B2BEB5',
    height: "106px",
    width: "1287px",
   // border:"solid",
  },
  content: {
    backgroundColor: "white",
    // height:"560px",
    //flexGrow:1,
    maxHeight: "1006px",
    //border:"solid",
   // margingTop: "10px",
   width: "1287px",
   

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
    height:'1006px',
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
    height: "700px",
    overflowX: 'visible', 
    overflowY: 'scroll',
  },
}));

const allSelectItems1 = [
  { id: 1, name: "1h" },
  { id: 2, name: "24h" },
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
const TradePage = (props) => {
  const style = useStyle();
  const wishlist = useSelector(state => state.wishlist);
  console.log("in tradepage="+wishlist);
  const selectedInterval=useSelector(state=>state.interval);
  console.log(selectedInterval,"selectedOne");
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
              <TopNavBar label={'Trade'} />
            </Grid>
            <Grid item  className={style.content}>
              <Grid container>
              <Grid item className={style.searchItemStyle}>
                <SearchItem />
              </Grid>
              <Grid item>
                <SelectComponent
                  allSelectItems={allSelectItems1}
                  defaultSelect={selectedInterval}
                />
              </Grid>
              <Grid item className={style.paddingItem}>
                <SelectComponent
                  allSelectItems={allSelectItems2}
                  defaultSelect="All assets"
                />
              </Grid>
              </Grid>
            </Grid>
            <Grid item className={style.TradeCardStyles}>
            <TradeCardDisplayHeaders/>
              <TradeCardDetails />
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

export default TradePage;