import React , { Component,useState } from 'react';
import Age from './Age'
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

    const Example = () => {
      const [startDate, setStartDate] = useState(null);
      return (
        
        <DatePicker 
        selected={startDate} 
        onChange={date => setStartDate(date)} />
      );
    };

    //e.currentTarget.reset();
    
  }
  
  
  render(){
    
    return(
      
      <form className="form-wrapper" onSubmit={this.handle}>
        <h1 className="form-title">Complete the following fields</h1>
        <div className="input-field">
          <label>Name</label>
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
          <select name="brand" ref={this.brandRef}>
            <option value="cleaner">Cleaner</option>
            <option value="doctor">Doctor</option>
            <option value="author">Author</option>
            <option value="farmer">Farmer</option>
            <option value="mechanic">Mechanic</option>
            <option value="florist">Florist</option>
          </select>
        </div>
        <div className="input-field">
          <label>Year of Birth</label>
          <input type="date" 
          defaultValue='2000-10-10'
          ref={this.yearRef} 
          max="2019-12-31"
          //max='2019'
          
          required />
        </div>

        
        
        
        <button type="submit" className="form-btn">Calculate</button>
      </form>
    )
  }
}

export default Form;