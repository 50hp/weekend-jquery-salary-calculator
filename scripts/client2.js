// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  console.log('in calculatInd');
  console.log( employee );
  let name = employee;
  let bonusPercentage = 0;
  let totalCompensation;
  let totalBonus;
  let staffBonus = {name: name ,
                bonusPercentage: bonusPercentage ,
                totalCompensation: totalCompensation,
                totalBonus: totalBonus};
  //console.log(staffBonus);
  for(let i = 0; i < employees.length; i++){
    //console.log(employees[i]);
     if (employees[i].name === employee){
      
        if (employees[i].reviewRating <= 2){
            console.log('no bonus');
            //bonusPercentage = 0;


        } else if (employees[i].reviewRating === 3){
            //console.log('4% bonus');
            staffBonus.bonusPercentage += .04;
            if (employees[i].employeeNumber.length === 4 ){
               // console.log('+5%');
                staffBonus.bonusPercentage += .05;
                //console.log(bonusPercentage);
            }
        } else if (employees[i].reviewRating === 4){
            //console.log('6%');
            staffBonus.bonusPercentage += .06;
            if (employees[i].employeeNumber.length === 4 ){
             // console.log('+5%');
              staffBonus.bonusPercentage += .05;
             // console.log(bonusPercentage);
          }

        }else if (employees[i].reviewRating === 5){
           // console.log('10%');
           staffBonus.bonusPercentage += .10;
            if (employees[i].employeeNumber.length === 4 ){
              //console.log('+5%');
              staffBonus.bonusPercentage += .05;
             // console.log(bonusPercentage);
          }
        }

        if (employees[i].annualSalary >= 65000){
          staffBonus.bonusPercentage = staffBonus.bonusPercentage - .01; 
          //console.log(staffBonus.bonusPercentage);
        if (staffBonus.bonusPercentage < 0){
          staffBonus.bonusPercentage = 0;
        }  
        }

      staffBonus.totalBonus =  employees[i].annualSalary  * staffBonus.bonusPercentage
      console.log('total bonus ', staffBonus.totalBonus)

      staffBonus.totalCompensation = employees[i].annualSalary / 1 + staffBonus.totalBonus
    }
   


  }

  if (staffBonus.bonusPercentage > .13){
        staffBonus.bonusPercentage = .13;

  }
  


  // return new object with bonus results
  return staffBonus;
}1

console.log(calculateIndividualEmployeeBonus('Atticus'));
console.log(calculateIndividualEmployeeBonus('Jem'));
console.log(calculateIndividualEmployeeBonus('Scout'));

console.log(calculateIndividualEmployeeBonus('Robert'));
console.log(calculateIndividualEmployeeBonus('Mayella'));



