import { ThemeProvider ,makeStyles} from '@material-ui/styles';
import React,{useState,useEffect} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
      display : 'inline-flex',
      width: '1191px',
      height: '246px',
      border: '1px solid #E8E8F7',
      margin:'24px'
  },
}));
const SingleStrandGraph = ({ currenctDetails}) => {
  const classes = useStyles();
  const[details,setDetails]=useState([]);
  function f(n) {    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
  }
  function rfc3339Date(d) {
    return d.getUTCFullYear()   + '-' +
         f(d.getUTCMonth() ) + '-' +
         f(d.getUTCDate()-1)      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  console.log("********************date="+ rfc3339Date(new Date()));
   
    //console.log(new Date().format("DD-MM-YYYY hh:mm:ss"),"d is selected date");
    console.log("Boom1",rfc3339Date(new Date()));

    const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in ssg serverurl",serverURL);
console.log("in ssg userId",userId);
    useEffect(() => { fetch(serverURL+'/currency/BTC/timeline?start='+rfc3339Date(new Date())).then((res) => res.json()).then(res => {
        console.log("inside fetch single strand",res.timelines);
         setDetails(res.timelines);
        
      })
      }, [])
  
//   const graphData=(array,chunk=2)=>{
//     let result=[]
//   details.map((item)=>{
//     //graphData.push(item[0]);
//     //console.log(new Date(item[0]).getDate(),item[1],"these are items")
//    // console.log(Number(item[1]))
//   // graphData.push(new Date(item[0]).getDate(),Number(item[1]))
//     result.push(new Date(item[0]))
//     result.push(Number(item[1]))
//   })
//   console.log("rtyuhjk");
//   return result;
// }
//   console.log(graphData);
// var x = new Array(10);

// for (var i = 0; i < x.length; i++) {
//   x[i] = new Array(2);
  
// }
// console.log(x);
// for(var i=0;i<x.length;i++){
//  x[i]=new Array([details[i][0],details[i][1]]);
// }
// console.log(x,"rtuyiitfu");
const intervalSelected=useSelector(state=>state.interval);
console.log(intervalSelected+"this is selected interval");
function createArray(length) {
  var arr = new Array(length || 0),
      i = length;

  if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while(i--) arr[length-1 - i] = createArray.apply(this, args);
  }

  return arr;
}

const y=createArray(details.length, 2);
for(var i=0;i<details.length;i++){
  y[i][0]=new Date(details[i][0]).getDate();
  y[i][1]=Number(details[i][1]);
}
console.log(y);

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
  
  legend: {
   
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
    data: y,
    pointRadius: 0,
  }]
  };
  
  return (
    <div className={classes.root}>
      
      <HighchartsReact  
      containerProps={{ style: { height: "246px" ,width:'1190.24px', display: 'flex' } }} 
       highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SingleStrandGraph;