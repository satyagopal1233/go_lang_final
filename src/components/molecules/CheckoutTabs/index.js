import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root2: {
    
   // borderRadius: "1px",
   // "&:hover": {
    //  borderColor: "#5ac568",
    //},
    //boxShadow: "0px 0px 5px #ccc",
    marginBottom:"10px"
	
  },
});
function CheckoutTabs({label1,label2,parentCallback}) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // sending selected tab value to parent using parent callback
    parentCallback(newValue);
  };

  return (
    <Paper className={classes.root2}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label={label1} />
        <Tab label={label2} />
      </Tabs>
    </Paper>
  );
}
export default CheckoutTabs;