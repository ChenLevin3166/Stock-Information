import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowData from './components/ShowData.js';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  // The function sets data of company 
  getChartData(){
    this.setState({
      chartData:{
        labels: ['31-05-2018', '04-10-2018', '06-02-2019', '05-09-2019', '02-04-2020', '25-06-2020'],
        datasets:[
          {
            label:'Price',
            data:[
              57.48,
              55.47,
              68.035,
              96.11,
              63.62,
              73.64
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
             <ShowData chartData={this.state.chartData}  legendPosition="bottom"/>
      </div>
    )
  }
}

