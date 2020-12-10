import React, {Component,useState} from 'react';
import Header from './Header';
import Form from './Form';
import calculateInsurance from '../helper';
import Resume from './Resume';
import Result from './Result';

class App extends Component {

  state = {
    result: '',
    data: {}
  }

  calculateInsurance = (data) => {
    const {value, occupation, year} = data;
    let result = calculateInsurance(value, year, occupation)
    console.log(result);

    const mainData = {
      value: value,
      occupation: occupation,
      year: year
      
    }

    this.setState({
      result: result,
      data: mainData
    })
  }

   render(){
     return(
       <div className="app-container">
        <Header titulo='Insurance calculator'/>
        <div className="form-container">
          <Form 
            handle={this.calculateInsurance}
          />
          <Resume 
            data={this.state.data}
          />
          <Result 
            result={this.state.result}
          />
        </div>
       </div>
     )
   }
}

export default App;