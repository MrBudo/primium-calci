function calculateInsurance(value, year, occupation ){
  let calculation;
  let byear;
  calculation=value
  byear=year
  console.log(byear)
  var inum = parseInt(byear);
  console.log( inum)
  let age = new Date().getFullYear() - inum;  

  console.log(age)

    
  switch (occupation) {
    case 'cleaner':
    calculation = calculation * 1.50;
    break;
    case 'doctor':
    calculation = calculation * 1.00;
    break;
    case 'author':
    calculation = calculation * 1.25;
    break;
    case 'farmer':
    calculation = calculation * 1.75;
    break;
    case 'mechanic':
    calculation = calculation * 1.75;
    break;
    case 'florist':
    calculation = calculation * 1.50;
    break;
    default:
    break;
  }
  
  
    calculation = (calculation *age )*0.012;
  return parseFloat(calculation).toFixed(2);
}

export default calculateInsurance;