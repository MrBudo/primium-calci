import React , { Component,useState } from 'react';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker'



class Form extends Component{
  
  valueRef = React.createRef();
  brandRef = React.createRef();
  yearRef = React.createRef();
  nameRef = React.createRef();  

  handle = (e) => {
    e.preventDefault();
    
    const mainInfo = {
      value: this.valueRef.current.value,
      occupation: this.brandRef.current.value,
      year: this.yearRef.current.value,
      name: this.nameRef.current.value,
    }
    this.props.handle(mainInfo);

    

    //e.currentTarget.reset();
    
  }
  
  
  render(){
    
    return(
      
      <form className="form-wrapper" onSubmit={this.handle}>
        <h1 className="form-title">Complete the following fields to calculate life insurance premium</h1>
        <div className="input-field">
          <label>Full Name</label>
          <input type="text" 
          ref={this.nameRef} 
          pattern="[a-zA-Z]+[a-zA-Z ]+" 
          title="Only alphabets"
          required/>
        </div>

        <div className="input-field">
          <label>Sum Insured</label>
          <input type="number" 
          ref={this.valueRef} 
          min='0'
          required/>
        </div>
        <div className="input-field">
          <label>Occupation</label>
          <select name="Brand" ref={this.brandRef}>
            <option value="Cleaner">Cleaner</option>
            <option value="Doctor">Doctor</option>
            <option value="Author">Author</option>
            <option value="Farmer">Farmer</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Florist">Florist</option>
          </select>
        </div>
        <div className="input-field">
          <label>Date of Birth</label>
          <input type="date" 
          date-format ='DD MM YYYY'
          //timezone="[[timezone]]"
          ref={this.yearRef} 
          //min = "1870-12-31"
         // max ={ new Date().toDateString}
          //max='2019'
          
          required />
        </div>

        
        
        
        <button type="submit" className="form-btn">Calculate</button>
      </form>
    )
  }
}

export default Form;