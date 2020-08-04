import React, { Component } from 'react';
 import {Line} from 'react-chartjs-2'


export default class ShowData extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
        chartData:props.chartData
     }
 }
 static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }
 
  

    render() {
        return (
            <div>
                {/* The title of web */}
                <h1 style={{position:"relative",textAlign:"center", top:"30px", fontFamily:"fantasy",color: "wheat"}}>Stock Information</h1>
                <div className="input-group md-form form-sm form-1 pl-0" style={{position:"relative",top:"50px", width:"300px", marginLeft:"auto", marginRight:"auto" }}>
                        <span className="input-group-text cyan lighten-2" id="basic-text1" style={{ backgroundColor: "#15A4EC" }}><i className="fas fa-search text-white"
                            aria-hidden="true"></i></span>
                    <input className="form-control my-0 py-1" type="text" placeholder="Search stock" aria-label="Search" />
                </div>
               <div style={{position:"relative",width:"800px",height:"500px", marginLeft:"auto", marginRight:"auto",top:"80px" ,backgroundColor:"white"}}>
              {/* Display data in graph */}
               <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
            // Name of company- the data displayed belongs her
              text:'SBUX - Starbucks',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
               </div>
                    
               
            </div>
        )
    }
}
