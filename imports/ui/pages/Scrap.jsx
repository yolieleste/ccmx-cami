import React from 'react';
import ReactHighcharts from 'react-highcharts';


var config1 = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Scrap Rate by model'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true,
         scrollbar: {
            enabled: true
        },
    },
    yAxis: {
        min: 0,
        labels: {
        format: '{value}%',
        },
        title: {
            text: 'Scrap rate'
        },
        plotLines: [{
          value: 0.25,
          color: 'green',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'target'
                }
            }]
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'TCH-LH01',
        data: [0.11, 0.10, 0.21, 0.11, 0.23, 0.05, 0.12, 0.10]

    }, {
        name: 'TCH-MH01',
        data: [0,0,0,0,0,0,0.10,0.24]

    }, {
        name: 'HUMAX-MH01',
        data: [0,0,0,0,0,0,0.05,0.07]

    }] 
};


var config2 = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Scrap rate by month'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'WK31',
            'WK32',
            'WK33',
        ],
        crosshair: true,
         scrollbar: {
            enabled: true
        },
    },
    yAxis: {
        min: 0,
        labels: {
        format: '{value}%',
        },
        title: {
            text: 'Scrap rate'
        },
        plotLines: [{
          value: 0.25,
          color: 'green',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'target'
                }
            }]
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Monthly scrap rate',
        data: [0.16, 0.24, 0.14, 0.09, 0.13, 0.07, 0.07, 0.13, 0.29, 0.08, 0.14]

    },] 
};

export default class Scrap extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card-panel hoverable">
              <span className="card-title">
                <h2>
                  PCBA Scrap
                </h2>
              </span>
              <div className="card-content">
                <p>Weekly scrap rate & Model Scrap rate</p>
              </div>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col s12">
        <ul className="tabs blue-text text-darken-2">
          <li className="tab col s3"><a href="#test1">By Model</a></li>
          <li className="tab col s3"><a href="#test2">By Month</a></li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        <ReactHighcharts config = {config1}></ReactHighcharts>
      </div>
      <div id="test2" className="col s12">
        <ReactHighcharts config = {config2}></ReactHighcharts>
      </div>
    </div>
  </div>
    );
  }
}
