import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from "@material-ui/styles";
import customtheme from '../../theme';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {RiMicrosoftFill,RiArrowRightSLine,RiPencilLine} from "react-icons/ri";
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        paddingTop:'30px',
        paddingBottom:'21px',
    },
    root2:{
        display: 'block',
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
    divider: {
        width:'10px',
        height:'100px',
        fontWeight: '500',
        border: '1px solid #ECECF7',
      },
      header:{
          paddingLeft:'24px',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '22px',
          letterSpacing: '0.005em',
          paddingRight:'12px',
      },
      discover:{
        fontWeight: '500',
        fontSize: '14px',
        color: '#0052FF',
        height: '16px',
        lineHeight: '16px',
        paddingLeft:'12px',
        paddingTop:'2px',
      },
      Pencil:{
          width:'18px',
          height:'18px',
          color:'#0052FF',
          paddingRight:'23px',
      },
      MicrosoftFill:{
         width:'18px',
         height:'18px',
          paddingLeft:'16px',
          color:'#0052FF',
      },
      alignJustify:{
          width:'18px',
          height:'18px',
          paddingLeft:'14px',
      },
      arrow:{
        color: '#0052FF',
        // height:'10px',
        // width:'6px'
        paddingTop:'2px',
        paddingLeft:'9px',
      },
      edit:{
        fontWeight: '500',
        fontSize: '14px',
        color: '#0052FF',
        height: '16px',
        lineHeight: '16px',
        paddingLeft:'500px', 
        paddingTop:'2px',
        paddingRight:'6px'
      }
}));
const WatchList = (  )  => {
   
    const classes=useStyles();
    const history = useHistory();
    return (
       
      <div>
          <ThemeProvider theme={customtheme}> 
        <Grid  container >
            <Grid item className={classes.root}>
           <Typography variant='h3' className={classes.header}> Watchlist</Typography>
           <Divider orientation="vertical" flexItem classname={classes.divider}/>
           <Button    className={classes.discover}  onClick={()=>history.push("/showTradeScreen")}> Discover assets </Button>
           <RiArrowRightSLine className={classes.arrow}/>
           <Typography   className={classes.edit}> EDIT</Typography>
            <RiPencilLine className={classes.Pencil}/>
            <Divider orientation="vertical" flexItem classname={classes.divider}/>
            <RiMicrosoftFill className={classes.MicrosoftFill}/>
            <FormatAlignJustifyIcon className={classes.alignJustify}/>
            </Grid>

          
        </Grid>
           
        </ThemeProvider>
     </div>
    );
  }
  
  export default WatchList;