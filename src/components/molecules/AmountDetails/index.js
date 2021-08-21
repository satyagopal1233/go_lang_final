import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Arrow from "../../../../public/images/Group 38.png";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { addChekoutCurrencyToStore, addInputAmountToStore } from "../../../redux/CryptoActions";
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
  root: {
    width: "710px",
    height: "318px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft: "24px",
    marginTop: "25px",
  },
  item: {
    width: "663px",
    height: "74px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  flexItem: {
    flexGrow: 1,
  },
});
function AmountDetails({checkoutType}) {
  const card = useSelector(state=>state.checkoutCrypto);
  console.log("*************",card);

  const id=card.id;
	const name = card.name
	const price = card.price

  const classes = useStyles();
  //const parentCallback = props.parentCallback;
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    //alert(e.target.value);

   // parentCallback(e.target.value);
    setValue(e.target.value);
    dispatch(addInputAmountToStore(e.target.value));
   

  };

  return (
    <Grid container className={classes.root} direction="row">
      <Grid item>
        <Typography variant="body1">Amount Details</Typography>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.item}
        >
          <Grid item className={classes.flexItem}>
            <TextField
              fullWidth
              onChange={(e) => handleInput(e)}
              value={value}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                   
                   {checkoutType === 'buy' && 
                    <Button variant="outlined" color="primary">
                            Buy max
                    </Button>
                  }
                   {checkoutType === 'sell' && 
                    <Button variant="outlined" color="primary">
                            Sell max
                    </Button>
                  }
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item>
           
            <img src={Arrow} height="88px" />
          </Grid>
          <Grid item>
           
            1{id}=<NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.item}
        >
          <Grid item className={classes.flexItem}>
            <Typography variant="subtitle1">
              {parseFloat(value /price).toFixed(6)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{id}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AmountDetails;
