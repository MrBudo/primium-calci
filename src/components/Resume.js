import React, { Component } from 'react';
//import age from '../helper'
class Resume extends Component {

  showData = () => {
    const {value,occupation, year } = this.props.data;
    var inum = parseInt(year);
    let age = new Date().getFullYear() - inum;
    if (!value || !occupation || !year ) return null;

    return(
      <div className="resume-wrapper">
        <h1 className="form-title">Your selection</h1>
        <ul>
          <li>Value: {value}</li>
          <li>occupation: {occupation}</li>
          <li>Date of Birth: {year}</li>
          <li>Age: {age} year</li>
        </ul>
      </div>
    );
  }
  render(){
    return(
      <div>
        {this.showData()}
      </div>
    )
  }
}

export default Resume;