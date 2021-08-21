import { ThemeProvider ,makeStyles} from '@material-ui/styles';
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';



const useStyles = makeStyles((theme) => ({
  root: {
      display : 'inline-flex',
      width: '1191px',
      height: '246px',
      border: '1px solid #E8E8F7',
      margin:'24px'
  },
}));
const BarGraph = ({details}) => {
    console.log(details);
  const classes = useStyles();
  const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        style: {
            display: 'none'
        }
    },
    subtitle: {
        //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        // categories: [
        //     'Monday',
        //     '',
        //     'Tuesday',
        //     'Wednesday',
        //     'Thursday',
        //     'Friday',
        //     'Saturday',
        //     'Sunday'
        // ],
        type: 'category',
        labels: {
            rotation: 0,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
       
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            style: {
            display: 'none'
        }
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        // data: [
        //    3, 4, 3, 5, 4, 10, 12,7,16,8,6,8,12
        // ],
        data:details,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
};
  return (
    <div className={classes.root}>
      
      <HighchartsReact  
      containerProps={{ style: { height: "246px" ,width:'1191px', display: 'flex' } }} 
       highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarGraph;