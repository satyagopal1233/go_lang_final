import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import PaymentCards from "./PaymentCards";
import { Grid, Typography } from '@material-ui/core';
import PaymentCard from '../PaymentCard';
import CheckoutWalletCard from '../CheckoutWalletCard';

const useStyles = makeStyles({
    root: {
      width: "710px",
      height: "166px",
      borderRadius: "1px",
      "&:hover": {
        borderColor: "#5ac568",
      },
      boxShadow: "0px 0px 5px #ccc",
      paddingLeft:"24px",
      marginTop:"25px"
   

     
    },
 
   
});
function PaymentCardsDisplay(props){
    const classes = useStyles();
    
    return(
        
        <Grid container className={classes.root} direction="row" spacing={1} >
            
            <Grid item>
                <Typography variant="body1">Payment method</Typography>
               
               </Grid>
              
           
                <Grid item>
                  <CheckoutWalletCard/>
               
               </Grid>
         
           
            </Grid>
            

       


    );
}
export default PaymentCardsDisplay;