import { ThemeProvider ,makeStyles} from '@material-ui/styles';
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "",
    style: {
      display: 'none'
  }
  },
//   series: [
//     {
//       data: [1, 2, 1, 4, 3, 6]
//     }
//   ]
// };
legend: {
  // layout: 'horizontal',
  // align: 'left',
  // verticalAlign: 'top',
  // x: 400,
  // y: 50,
  // floating: true,
  // //borderWidth: 1,
  // backgroundColor:
  //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  enabled: false
},
xAxis: {
  categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
  ],
 
},
yAxis: {
  title: {
      text: 'Fruit units'
  }
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
      fillOpacity: 0.3,
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
  color:'#FFA74F',
  data: [3, 4, 3, 5, 4, 10, 12],
  pointRadius: 0,
}, {
  name: 'Jane',
//   color: {
//     linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
//     stops: [
//         //[0, '#003399'],
//         [1, '#0052FF']
//     ]
// },
color:'#0052FF',
  data: [1, 3, 4, 3, 3, 5, 4]
}]
};
const useStyles = makeStyles((theme) => ({
  root: {
      display : 'inline-flex',
      width: '791.49px',
      height: '246px',
      border: '1px solid #E8E8F7',
      margin:'24px'
  },
}));
const Graph = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <HighchartsReact  
      containerProps={{ style: { height: "246px" ,width:'791px', display: 'flex' } }} 
       highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;