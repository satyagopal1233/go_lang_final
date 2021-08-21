import React from "react";
import ProfileItem from '../../molecules/ProfileItem/index';
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from '../../atoms/button/CustomButton';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
        //display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
        width: '1286px',
		    height: '82px',
       // marginLeft:'80px',
       //height:'106px',
     // height:'106px',
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
        fontSize: '14px',
        lineHeight: '42px',
        letterSpacing: '0.005em',

    },
    headerItemAlignment:{
       paddingLeft:'16px',
    },
    headerItemFLex:{
        flexGrow:1
    }
}));
const TopNavigation = (props )  => {
    const label = props.label;
    const classes=useStyles();
    const history = useHistory();
    return (
       
      <div>
        <Grid container className={classes.root} >
          <Grid item className={classes.headerItemFLex}> <Typography variant="h1">{label}</Typography></Grid>
          <Grid item>
                <Button  variant='contained' text="SELL" color="secondary"
                 onClick={()=>history.push("/sellCrypto")}></Button>
           </Grid>     
          <Grid item style={{paddingLeft:"12px"}}>
                <Button  variant='contained' text="BUY" color="primary"                
                onClick={()=>history.push("/buyCrypto")}></Button>
           </Grid>   
          
           {/* <Grid item className={classes.headerItemAlignment}>    
           <Button  variant='outlined' text="SEND/RECEIVE" color="primary"></Button>
           </Grid> */}
           <Grid item className={classes.headerItemAlignment}>
            <ProfileItem></ProfileItem>
            </Grid>
        </Grid>
     </div>
    );
  }
  
  export default TopNavigation;