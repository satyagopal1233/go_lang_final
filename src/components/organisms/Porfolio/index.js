import { Grid, Typography, ThemeProvider  } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import TradeCardDetails from "./PorfolioCardDetails";
import CurrencyValueDisplayCard from '../../molecules/CurrencyValueDisplayCards/index';
import customtheme from "../../theme";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TransactionCardDetails from "./TransactionCardDetails";
import TransactionCard from '../../molecules/TransactionCard/index';
import EmptyCard from '../../../../public/images/Group 40.png';
import { RiAlignJustify } from "react-icons/ri";
import { RiCheckFill } from "react-icons/ri";
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {RiDonutChartLine} from "react-icons/ri";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
       maxWidth: 400,
      // margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
      balanceAlignment:{
        display:'flex',
        paddingTop:'16px',
        paddingBottom:'16px'
       
      },
      amountAlignment:{
        display:'flex',
        marginLeft:'210px',
      },
      viewAlignment:{
        display:'flex',
         marginLeft:'167px',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0.005em',
        color: '#0052FF',
        fontWeight:'normal',
      },
      transactionAlignment:{
        paddingTop:'36px',
        display:'flex',
        
      },
      ImagePadding:{
          paddingTop:'90px',
          paddingLeft:'100px',
      },
      messageAlignment:{
        width: '350px',
        height: '32px',
        textAlign: 'center',
        paddingLeft:'15%',
        paddingRight:'15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
      },
      portfolioAlignment:{
        display: 'flex',
      },
      dotChart:{
          width:'19.95px',
          height:'19.95px',
          paddingLeft:'200px',
      },
      alignJustify:{
        width:'19.95px',
        height:'19.95px',
        color:'#0052FF',
        paddingLeft:'13.05px',
      },
      divider:{
         marginTop:'16px'
      },
      cardsAlignment:{
       
        scrollbarWidth:'thin',
        overflowY: 'scroll',
        overflowX: 'hidden',
          height:'300px',
      }
    }));

export default function Portfolio(props){


  
const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in portfolio serverurl",serverURL);
console.log("in portfolio userId",userId);
    const jobsInFindJobs = TradeCardDetails
   
    const classes=useStyles();
    const[transactions,setTransactions]=useState([]);
    useEffect(() => { fetch(serverURL+'/transactions/'+userId).then((res) => res.json()).then(res => {
      setTransactions(res);

    })
    }, [])
    console.log("transaction are",transactions);
    const recentTransactions=transactions

     const[portfolio,setPortfolio]=useState([]);
     useEffect(() => { fetch(serverURL+'/portfolio/'+userId).then((res) => res.json()).then(res => {
      setPortfolio(res.portfolio_list);

     })
     }, [])
     console.log("portfolio are",portfolio);
     
    return(
        <ThemeProvider theme = {customtheme}>
            <Paper  className={classes.paper}>
            <Grid container >
                <Grid item className={classes. portfolioAlignment}>
                <Typography variant='h3'>My Portfolio</Typography>
                <RiDonutChartLine className={classes.dotChart}/>
                <FormatAlignJustifyIcon className={classes. alignJustify}/>
                </Grid>
                <Grid item className={classes.cardsAlignment}>
                {jobsInFindJobs.map((item) => (
                    
                        <CurrencyValueDisplayCard job={item}/>
                    ))
                    }
                </Grid>
                <Grid item xs >
                    <Divider  className={classes. divider}/>
                    <div className={classes.balanceAlignment}>
                    <Typography variant='h3' style={{ display:'flex'}}>Total Balance</Typography>
                    <Typography varinat='h4' className={classes.amountAlignment}>₹ 14,027.2</Typography>
                    </div>
                    <Divider/>
                </Grid>
                <Grid item xs className={classes.transactionAlignment}>
                <Divider />
                    <Typography variant='h3'>Recent Transactions</Typography>
                    <Typography  className={classes.viewAlignment}>view All</Typography>
                   
                </Grid>
                <Grid item className={classes.cardsAlignment}>
                    {recentTransactions.length>0 && recentTransactions.map((item)=>(
                        <TransactionCard job={item}/>
                    ))}
                    {recentTransactions.length==0 &&
                    <Grid item className={classes.ImagePadding}>
                    <img src={EmptyCard} alt={EmptyCard} />
                    </Grid>
                    }
                </Grid>
                {recentTransactions.length==0 && 
                <Grid item className={classes.messageAlignment}>
                    <Typography variant='h4'>You don’t own any crypto. Send yourself some crypto to get started.</Typography>
                </Grid>
                }
               
            </Grid>
            </Paper>
        </ThemeProvider>
           
    );
}