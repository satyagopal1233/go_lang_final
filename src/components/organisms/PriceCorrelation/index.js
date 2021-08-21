import { Grid, Typography, ThemeProvider  } from "@material-ui/core";
import React from "react";
import CurrencyValueDisplayCard from '../../molecules/CurrencyValueDisplayCards/index';
import customtheme from "../../theme";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PriceCardDetails from "./PriceCardDetails";
import PriceCorrelationCards from '../../molecules/ProfileCorrelationCards/index';

import SingleStrandGraph from "../../molecules/SingleStrandGraph";
import BarGraph from "../../molecules/BarGraph";
import CoinDescription from "../../molecules/CoinDescription";
import CustomTabs from '../Tabs/index';
const useStyles = makeStyles((theme) => ({
    paper: {
       maxWidth: 400,
      // margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
      cardsAlignment:{
       
        scrollbarWidth:'thin',
        overflowY: 'scroll',
        overflowX: 'hidden',
          height:'300px',
      },
     
      PriceCorrelationAlignment:{
        display: 'flex',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
      },
      alignJustify:{
        width:'19.95px',
        height:'19.95px',
        color:'#0052FF',
       // paddingLeft:'11.05px',
      },
      root:{
       
       //Height: '50px',
       marginLeft:'24px',
      },
      positivePercentage:{
        color:'#20B03F',
        paddingRight:'24px',
        display:'flex',
        marginLeft:'24px',
    },
      negativePercentage:{
          color:'#B71A33',
          display:'flex',
      },
      amount:{
        display:'flex',
      paddingLeft:'24px',
      paddingRight:'3px',
        fontSize: '24px',
        lineHeight: '34px',
        fontStyle: 'normal',
        fontWeight: 'normal',
      // margingLeft:'24px'
      },
      title:{
        marginLeft:'24px',
      },
      tabsAlignment:{
        paddingLeft:'100px',
      }
        
    }));

export default function PriceCorrelation({currentPercentage,currentAmount}){
    const jobsInFindJobs = PriceCardDetails
    console.log(currentAmount);
    const classes=useStyles();
    return(
        <ThemeProvider theme = {customtheme}>
          
            <Grid container >
            <Grid item xs={7}  >
              <Typography variant="h4" className={classes.title}>Current Value</Typography>
              <Typography className={classes.amount}>{currentAmount}</Typography>
              {currentPercentage[0]=='+' && 
            <Typography variant='h4' className={classes.positivePercentage}> {currentPercentage}</Typography>
           }
            </Grid>
            <Grid  item xs={5}>
              <CustomTabs className={classes.tabsAlignment}/>
            </Grid>
              <Grid item >
                <SingleStrandGraph  details={[
                    // ['', 20.8],
                    // ['Guang', 13.1],
                    // [' ', 12.7],
                    // ['Mumbai', 12.4],
                    // ['Moscow', 12.2],
                    // ['São Paulo', 12.0],
                    // ['Delhi', 11.7],
                    // ['Kinshasa', 11.5],
                    // ['Tianjin', 11.2],
                    [
            "2021-08-18T10:00:00Z",
            "25690.35730501"
            ],
            [
            "2021-08-14T09:00:00Z",
            "15452.1922959"
            ],
            [
            "2021-08-12T08:00:00Z",
            "45332.41925163"
            ],
            [
            "2021-08-11T07:00:00Z",
            "35014.88294324"
            ],
            [
            "2021-08-10T06:00:00Z",
            "05478.09295335"
            ],
            [
            "2021-08-09T05:00:00Z",
            "45524.25749915"
            ],
            [
            "2021-08-08T04:00:00Z",
            "15167.71744425"
            ],
            [
            "2021-08-02T03:00:00Z",
            "45167.33465259"
            ]
                    ]}/>
                   <Typography variant="h3" className={classes.title}>Bitcoin 01M volume chart</Typography>
                  <BarGraph details={[
                    ['', 20.8],
                    ['Guang', 13.1],
                    [' ', 12.7],
                    ['Mumbai', 12.4],
                    ['Moscow', 12.2],
                    ['São Paulo', 12.0],
                    ['Delhi', 11.7],
                    ['Kinshasa', 11.5],
                    ['Tianjin', 11.2],
                    ]}/>
              </Grid>
                <Grid item>
                <CoinDescription
                  head= {"About Bitcoin"}
                 body={ "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin."}

                />
                
                </Grid>
                <Grid item className={classes.cardsAlignment}>
                <Typography >Price correlation with</Typography>
                                                
                    {jobsInFindJobs.map((item) => (
                    
                        <PriceCorrelationCards job={item}/>
                    ))
                    }
                </Grid>
                              
            </Grid>
         
        </ThemeProvider>
           
    );
}