import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from "@material-ui/styles";
import customtheme from '../../theme';
import CustomizedTabs from '../Tabs/index';
import CustomizedGraphs from '../../molecules/graph/index';
import DataReport from '../../../../public/images/dataReport.png';
import Card from "@material-ui/core/Card";
const useStyles = makeStyles((theme) => ({
    root: {
     
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    root2:{
      width:'840px',
      height:'420px',
       display: 'flex',
    },
    divider: {
       
      },
      header:{
          paddingLeft:'24px',
          paddingRight:'12px',
          display:'flex',
      },
      discover:{
        fontWeight: '500',
        fontSize: '14px',
        color: '#0052FF',
        height: '16px',
        lineHeight: '16px',
        paddingLeft:'12px',
      },
      positivePercentage:{
          color:'#20B03F',
          paddingRight:'24px',
          display:'flex',
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
      amountAlignment:{
          display:'flex',
      },
      graph:{
        width:'500px',
        height:'300px',
      },
      dataReport:{
        paddingLeft:'275px',
        paddingRight:'329px',
        
      },
      listItem1: {
       display:'flex',
       width:'10px',
       height:'10px',
       backgroundColor:'#FFA74F',
       borderRadius:'100%',
       marginLeft:'600px'
      },
      listItem2:{
        display:'flex',
        width:'10px',
        height:'10px',
        backgroundColor:'#0052FF',
        borderRadius:'100%',
        marginLeft:'10px'
      },
      headingAlignment:{
        paddingTop:'32px',
        paddingBottom:'12px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0.005em',
        marginLeft:'14px',
      }
     
}));

const WatchList = ({currentPercentage,currentAmount,totalPercentage,totalAmount}  )  => {
  
    const classes=useStyles();
    console.log(Number(totalPercentage));
    return (
       
      <div>
          <ThemeProvider theme={customtheme}> 
          <Typography className={classes.headingAlignment}>My portfolio value</Typography>
          <Card>
        <Grid  container direction="column" className={classes.root2}>
       
       
            <Grid container item className={classes.root} >
           
           <Typography variant='h4' className={classes.header}> Current Value</Typography>
           {currentPercentage[0]=='+' && 
           <Typography variant='h4' className={classes.positivePercentage}> {currentPercentage}</Typography>
           }
           {currentPercentage[0]=='-' && 
           <Typography variant='h4' className={classes.negativePercentage}> {currentPercentage}</Typography>
           }
           <Divider orientation="vertical" flexItem classname={classes.divider}/>
           <Typography  variant='h4'  className={classes.header}> Total Investment </Typography>
           {totalPercentage[0]=='+' && 
           <Typography variant='h4' className={classes.positivePercentage}> {totalPercentage}</Typography>
           }
           {totalPercentage[0]=='-' && 
           <Typography variant='h4' className={classes.negativePercentage}> {totalPercentage}</Typography>
           }
           <Grid item>
           <CustomizedTabs/>
           </Grid>
           <Grid container item >
           <div className={classes.listItem1}></div>
         <Typography variant="h4" >Total Investment</Typography>
         <div className={classes.listItem2}></div>
         <Typography variant="h4" >Current Income</Typography>
         
           </Grid>
           </Grid>
           <div className={classes.amountAlignment}>
           <Typography  className={classes.amount}>{currentAmount}</Typography>
           <Divider orientation="vertical" flexItem classname={classes.divider}/>
           <Typography  className={classes.amount}>{totalAmount}</Typography>
         
           </div>
          
            <Grid container item>
            {Number(totalPercentage)!=0  &&
            <CustomizedGraphs/>
            }
            {Number(totalPercentage)==0  &&
            <img src={DataReport} alt={DataReport} className={classes.dataReport}/>
            }
          
            </Grid>
            
           
        </Grid>
     
        </Card>
        </ThemeProvider>
     </div>
    );
  }
  
  export default WatchList;