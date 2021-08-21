import React,{useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from "@material-ui/core";
import { ThemeProvider,makeStyles } from "@material-ui/styles";
import customtheme from '../../theme';
import { useDispatch, useSelector } from "react-redux";
import { addInterval} from '../../../redux/CryptoActions';
const useStyles = makeStyles({
	
	root2: {
		width: '300px',
		Height: '50px',
		marginBottom: '10px',
       // marginLeft:'75%',
        borderRadius : '0px',
        border: '1px solid #E8E8F7',
        padding:'5px',
       
	},
});
export default function CustomizedTabs() {
  const [value, setValue] = React.useState(3);
  const dispatch = useDispatch();
  const classes=useStyles()
  const selectedInterval=useSelector(state=>state.interval);
  console.log("selected indxe tab is",selectedInterval);
  useEffect(()=>{
    if(selectedInterval=='1h')
    setValue(0);
    else if(selectedInterval=='24h')
    setValue(1);
    else if(selectedInterval=='1w')
    setValue(2);
    else if(selectedInterval=='1m')
    setValue(3);
    else if(selectedInterval=='1y')
    setValue(4);
  },[]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  
   if(newValue==0){
    console.log('1h');
    dispatch(addInterval('1h'));
    
   }
   else if(newValue==1){
  
    dispatch(addInterval('24h'));
  
   }
   else if(newValue==2){
  
    dispatch(addInterval('1w'));
  
   }
   else if(newValue==3){
  
    dispatch(addInterval('1m'));
  
   }
   else{
    console.log('1y');
    dispatch(addInterval('1y'));
   }
  };

  return (
    <ThemeProvider theme={customtheme}>
     <Grid  container className={classes.root2}>
   
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="1H" />
        <Tab label="24H" />
        <Tab label="1W" />
        <Tab label="1M" />
        <Tab label="1Y" />
        <Tab label="ALL" />
      </Tabs>
  
    </Grid>
    </ThemeProvider>
  );
}
