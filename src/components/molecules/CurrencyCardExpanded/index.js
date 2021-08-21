import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import NumberFormat from 'react-number-format';
  
const useStyles = makeStyles({
	
	root2: {
		width: '840px',
		Height: '130px',
		marginBottom: '10px',
        display: 'flex',
        marginLeft:'10px',
		padding: "24px",
        borderRadius : '0px',
        '&:hover':{
			borderColor:'#5ac568',
		},
		boxShadow: '0px 0px 5px #ccc',
	},
	
	isActive:{
		border: "1px solid #5ac568",
	},
	// logo_urlPadding: {
	// 	//padding: "5% 3% 3% 5%",
	// 	paddingLeft:'7%',
	// 	paddingTop:'7%',
	// 	paddingRight:'3%',
	// 	paddingBottom:'3%'
	// },
	header: {
		 display: "flex",
		 justifyContent: "space-between",
		 alignItems: "center",
		 objectFit:'contain',
	},
	spacing: {
		
		color:'#5f7381',
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
        fontSize: '12px',
        fontWeight: '500',
        paddingLeft:'20%',
        display: 'flex',
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
  
    
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    cardInfoPadding : {
       // paddingLeft: '20px',
        
    },
	moreIconPadding :{
		color : '#5f7381',
	},
    graphAlignmnent:{
     // paddingLeft:'500px',
     // paddingBotton:'300px',
        display: 'flex',
        height: "58.38px" ,
        width:'188.5px',
    border: '1px solid #E8E8F7',
    },
    PercentagePadding:{
         paddingLeft:'90%',
        // paddingTop:'10%',
    },
    timeStampPadding:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '2px 8px',
        width: '41px',
        height: '18px',
        background: '#E8E8F7',
        borderRadius: '100px',
        //margin: '8px 0px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.005em',
        color: '#7D7D89',
        textAlign:'center',
        marginTop:'20px',
    }

});

export default function cardCard({
	card, isActive, renderPages
}) {
	// const isActive = card.isActive,
	
	const logo_url = card.logo_url
	const name = card.name
	const price = card.price
	const classes = useStyles()
	const percentage=card.percentage
	const statusColor='+10%'
    const timeStamp='24hrs'
	const handleChangeForCard = () =>{
		
	
    }
    const options = {
      chart: {
        type: "areaspline",
      },
      title: {
        text: '',
        style: {
            display: 'none'
        }
      },
    
    legend: {
    //   layout: 'horizontal',
    //   align: 'left',
    //   verticalAlign: 'top',
    //   x: 400,
    //   y: 50,
    //   floating: true,
    //   //borderWidth: 1,
    //   backgroundColor:
    //       Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    enabled: false
    },
    xAxis: {
      // categories: [
      //     'Monday',
      //     'Tuesday',
      //     'Wednesday',
      //     'Thursday',
      //     'Friday',
      //     'Saturday',
      //     'Sunday'
      // ],
      // visible: false
     
    },
    yAxis: {
      title: {
          text: 'Fruit units'
      },
      visible: false
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
          fillOpacity: 0.1,
      },
      series: {
        marker: {
            enabled: false
        }
    }
      
    },
    series: [
      
      {
      name: 'John',
      color:'#20B03F',
      data: [0, 8, 3, 9,4 , 10,3,10],
      pointRadius: 0,
    }]
    };
  
	
		return (
                // <div data-testid = "maindivincardcardsmall">
                	 <ThemeProvider theme={customtheme}>
				<Card variant="outlined" className= {classes.root2} data-testid = "cardincardcardsmall" onClick = { handleChangeForCard }>

						<Grid container data-testid = "maingridincardcardsmall">
							<Grid item xs={1} data-testid = "firstgridincardcardsmall">
								<MyImage alt={logo_url} src={logo_url} width="44px" height="44px" data-testid = "myimageincardcardsmall"/>
							</Grid>
							<Grid item xs className={classes.cardInfoPadding} data-testid = "secondgridincardcardsmall">
								<Typography gutterBottom variant="h3" data-testid = "nameincardcardsmall">
									{name}
								</Typography>
                                
                                <Typography gutterBottom variant="h3">								
                                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
								</Typography>
                                <Typography className={classes.timeStampPadding} gutterBottom variant="h3">								
									{timeStamp}
								</Typography>
								
								
							</Grid>
                            <Grid item  className={classes.inCol} data-testid = "fourthgridinjobcardsmall"  alignItems='center'>
								<div className={classes.spacing} data-testid = "innergridinjobcardsmall">
									<Typography  className={classes.spacing} style={{
									color:statusColor,
                                    fontSize:'12px',
                                    paddingLeft:'350px',
                                   // display: 'flex',
									}}>
										{percentage}
									</Typography>
                                </div>
                               
                               
							{/* </Grid>
                            <Grid item xs={2} className={classes.inCol}  alignItems='center'> */}
                            <HighchartsReact  className={classes.graphAlignmnent}
                                 containerProps={{ style: { height: "78.38px" ,width:'622px', display: 'flex' } }} 
                                // constructorType={"chart"}
                                 highcharts={Highcharts}
                                  options={options} />
                            </Grid>

						</Grid>
				
				</Card>
                </ThemeProvider>
			// </div>
		);
	}