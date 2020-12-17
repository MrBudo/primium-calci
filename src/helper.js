var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');



function calculateInsurance(value, year, occupation ){
  let calculation;

  calculation=value
   

  
  let ageFromString = new AgeFromDateString(year).age;
  console.log("value from ageFromString", ageFromString);
    
  switch (occupation) {
    case 'Cleaner':
    calculation = calculation * 1.50;
    break;
    case 'Doctor':
    calculation = calculation * 1.00;
    break;
    case 'Author':
    calculation = calculation * 1.25;
    break;
    case 'Farmer':
    calculation = calculation * 1.75;
    break;
    case 'Mechanic':
    calculation = calculation * 1.75;
    break;
    case 'Florist':
    calculation = calculation * 1.50;
    break;
    default:
    break;
  }
  
  
    calculation = (calculation *ageFromString )*0.012;
  return parseFloat(calculation).toFixed(2);
}

export default calculateInsurance;