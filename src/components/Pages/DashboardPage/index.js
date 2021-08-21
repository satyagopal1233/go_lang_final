import React, { useEffect, useState } from "react";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideNavBar from "../../organisms/SideNavBar/index";
import TopNavigation from "../../organisms/TopNavBar";
import SearchItem from '../../molecules/SearchItem/index';
import SelectComponent from '../../molecules/SelectComponent/index';
import TradeCardDetails from "../../organisms/TradeCardDetails/index";
import Footer from '../../organisms/Footer/index';
import CardsDisplay from "../../organisms/CardsDisplay";
import WatchList from '../../organisms/WatchList/index';
import Porfolio from '../../organisms/Porfolio/index';
import Graph from '../../organisms/Graph/index';
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
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
        height: "1000vh",
      },
  sideNav: {
    //backgroundColor: '#e7fce0',
    height:"1088px",
    width:'80px',
    //boxShadow: '0px 0px 5px #ccc',
    //marginRight:'5px',
  },
  banner: {
    
    //backgroundColor: '#B2BEB5',
    height:'82px',
    width:'1287px',
    //boxShadow: '0px 0px 5px #ccc',
    
    
  },
  content: {
    backgroundColor: 'white',
   // height:"560px",
    //flexGrow:1,
    width:'950px',
    height:"900px"
   
  },
  rightPanel: {
     
   // backgroundColor: '#71fed4',
    width: '410px',
    height: '741px',
  //  marginTop:'100px',
  },
  rightAlignment:{
    backgroundColor: '#e7fce0',
    marginTop:'5px',
    height: "100vh",
   
  },
  middleContainer:{

    width:'100%',
    height:'100%',
   

  },
  filterboxStyle:
  {

    height:'500px',



  },

}));

const Dashboard = (props) => {
  const style = useStyle();
  
  


  return (
    <div clasName={style.root}> 


    
 
     
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>

          <Grid item xs={1} className={style.sideNav}>
            {props.sideNav}
            <SideNavBar/>

          </Grid>
          
          <Grid item xs={10} >

          <Grid container direction="column" spacing={2}>

            <Grid item   className={style.banner}>
            <TopNavigation label={'Dashboard'}/>
            </Grid>


            <Grid item>

            <Grid container direction ="row" className={style.middleContainer} spacing={2} >


              <Grid item   className={style.content}  xs={8}>
           
            <WatchList/>
            <CardsDisplay/>
            <Graph currentPercentage={'+8.00'}
            currentAmount={'₹11,900,204'}
            totalPercentage={'-8.06'}
            totalAmount={'₹11,900,204'}/>



              </Grid>


              <Grid item className={style.rightPanel} xs={4} >

            <Porfolio/>


        </Grid>


              {/* <Grid item className={style.rightPanel}  xs={3} > */}
              <Grid item   className={style.banner}>
          <Footer />
            </Grid>

           </Grid>
            </Grid>




            </Grid>
            
          




         
         </Grid>
        </Grid>

       
        
      </Paper>
     
  

 
      
          </div>

  
  );
};


export default Dashboard;