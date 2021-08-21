import React from "react";
import ProfileItem from '../../molecules/ProfileItem/index';
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from '../../atoms/button/CustomButton';

import SelectCompoment from "../../molecules/SelectComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
        width: '1286px',
		//maxHeight: '82px',
        height:'106px',
        //marginLeft:'80px',
       border: '1px solid #ECECF7',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '34px',
/* identical to box height, or 142% */
    },
    buttonAlignment:{
        display : 'inline-flex',
        paddingLeft:'62%',
        gap:'16px',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: '100px',
        lineHeight: '42px',
        letterSpacing: '0.005em',

    },
    FooterItem:{
        paddingLeft:'24px',
    },
    FooterItemFlex:{
        paddingLeft:'24px',
        flexGrow: 1,
    },
    FooterItemLast:{
       // paddingRight:'24px',
        paddingLeft:'24px',
    },
  
}));
const Footer = (  )  => {
    const allSelectItems = [
        {id:1,name:"English"},
        {id:2,name:"French"},
        {id:3,name:"Chinese"}]
    const classes=useStyles();
    return (
      
      <div>
          
        <Grid container className={classes.root}  >
            <Grid item className={classes.FooterItem}>
           <Typography color="primary"> Dashboard</Typography>
           </Grid>
           <Grid item className={classes.FooterItem}>
           <Typography color="primary" > carrers</Typography>
           </Grid>
           <Grid item className={classes.FooterItem}>
           <Typography color="primary"> Legal & Privacy</Typography>
           </Grid>
           <Grid item className={classes.FooterItemFlex}>
           <Typography> @2021 Minet</Typography>
           </Grid>
           <Grid item >
                <SelectCompoment allSelectItems={allSelectItems} defaultSelect='English'/>
              
           </Grid>
           <Grid item className={classes.FooterItemLast}>
               
           <Button  variant='contained' text="Need Help" color="primary"></Button>
          </Grid>
        </Grid>
       
     </div>
    );
  }
  
  export default Footer;