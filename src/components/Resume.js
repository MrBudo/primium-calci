import React, { Component } from 'react';

//var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');
//import age from '../helper'
class Resume extends Component {

  showData = () => {
    const {value, occupation, year } = this.props.data;
    
    var ageCalculator = require('age-calculator');
    let {AgeFromDateString, AgeFromDate} = require('age-calculator');
    let age   = new AgeFromDateString(year).age;
    console.log("value from ageFromString", age);

    if (!value || !occupation || !year ) return null;

    let dateStr =new Date(year)

    let bdate = dateStr.getDate()
    let bmonth = dateStr.getMonth()
    let byear = dateStr.getFullYear()

    return(
      <div className="resume-wrapper">
        <h1 className="form-title">Your selection</h1>
        <p>
          Based on your<b> date of birth: {bdate}-{bmonth}-{byear} </b>your age is <b>{age}  </b>years. You have the sum insured of <b>{value} </b>and your occupation being <b> {occupation}</b>.

        </p>
        
        
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