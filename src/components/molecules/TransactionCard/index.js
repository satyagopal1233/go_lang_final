import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import { RiCheckFill } from "react-icons/ri";
import Vector from "../../../../public/images/Vector.png"

const useStyles = makeStyles({
	
	root2: {
		width: '370px',
		Height: '92px',
		padding: "10px",
		//display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)',
		margin: '4px 0px',
	},
	isActive:{
		border: "1px solid #5ac568",
	},
	imagePadding:{
			padding:'10px',
			alignItems:'center',
			 width: '25px',
			 height: '25px',
			color: '#20B03F',
			background: '#E9F7EC',
			borderRadius: '100px',
	},
	imagebox:{
			paddingLeft:'4%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start',
			// width: '44px',
			// height: '44px',
			// background: '#E9F7EC',
			// borderRadius: '100px',
	},
	spacing: {
		
		 display: 'flex',
		 flexDirection: 'row',
		 width: '150px',
		 paddingRight:'50px',
		 borderColor:' #0052FF'
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
    statusAlignment:{
		background: '#E8E8F7',
		borderRadius: '100px',
		width: '76px',
		height: '18px',
		paddingLeft:'10px',
	},
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '5%'
    },
	
    PercentagePadding:{
		 width: '60px',
		paddingLeft:'55px',
		 paddingBottom:'8px',
    },
	dateAlignment:{
		paddingLeft:'8%',
		paddingBottom:'2%',
		fontFamily: 'Graphik',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '0.005em',
	}

});

export default function JobCard({
	job, isActive, renderPages
}) {
	

	const currency = job.currency_details.name
	const status = job.status
	const amount = job.units
	const classes = useStyles()
	const changeInAmount=job.total_value
	const date=new Date(job.timestamp)
	console.log(new Date(job.timestamp),"timeStamp");
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	  ];
	
		return (
                	 <ThemeProvider theme={customtheme}>
				<div className= {classes.root2}>
						
							<div >
							<Typography  className={classes.dateAlignment}>
							{months[date.getMonth()]}{date.getDate()}
								</Typography>
								</div>
								<Grid container >
							<Grid item  className={classes.imagebox}>
								<RiCheckFill className={classes.imagePadding} />
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding} >
								<Typography gutterBottom variant="h3" >
									{currency}
								</Typography>

								<Typography variant="h4" className={classes.statusAlignment}>
									{status}
								</Typography>
								
							</Grid>
                          	<Grid item xs={1} className={classes.inCol}   alignItems='center'>
								<div >
									<Typography  variant="h3" >
										{parseFloat(amount).toFixed(6)}
									</Typography>
                            </div>
                                    <div className={classes.PercentagePadding}>
									<Typography variant='h4'>
										{changeInAmount}
									</Typography>
								</div>
							</Grid>
						</Grid>
				
				</div>
                </ThemeProvider>
		);
	}