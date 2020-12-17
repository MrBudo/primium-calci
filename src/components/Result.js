import React, { Component } from 'react';

class Result extends Component{

  showCost = () => {
    const resultPrice = this.props.result;

    if (!resultPrice) return null;

    return(
      <div className="resume-wrapper">
        <h1 className="form-title">Calculated Premium</h1>
        <p className="result-price">${resultPrice}</p>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.showCost()}
      </div>
    )
  }
}

export default Result;