$(onReady)

function onReady() {
  console.log('hello');

  $('#submitBtn').on('click',addToTable);
  $('#tbody').on('click', '#delBtn', deleteRow);

}

let inputArray = 0;

function addToTable(event) {

  //use the event arg to stop default page reload.
  event.preventDefault();
  let inputOne;
  let inputTwo;
  let inputThree;
  let inputFour;
  let inputFive;

  //grab val from the inputs

 inputOne = $('#inputOne').val();
 inputTwo = $('#inputTwo').val();
 inputThree = $('#inputThree').val();
 inputFour = $('#inputFour').val();
 inputFive = $('#inputFive').val();
 //console.log(inputOne, inputTwo, inputThree, inputFour, inputFive);

  $('#tbody').append(`
  <tr>
    <td>${inputOne}</td>
    <td>${inputTwo}</td>
    <td>${inputThree}</td>
    <td>${inputFour}</td>
    <td>${inputFive}</td>
    <td><button id="delBtn">Delete</button></td>
  </tr>
  `);
  

   inputArray += Math.round(inputFive / 12);



  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#inputThree').val('');
  $('#inputFour').val('');
  $('#inputFive').val('');

    console.log(inputArray);
 
    displayTotalMonthly();
}

function deleteRow(){
      $('#delBtn').parent().parent().remove();
}


function displayTotalMonthly(){

      if(inputArray > 20000){
        $('#totalMonthly').empty()
        $('#totalMonthly').append(`
        <h4 style="background-color:red";>Total Monthly:
         $ ${inputArray}
         </h4>
         
         `);
      }else{
      $('#totalMonthly').text(`Total Monthly: $ ${inputArray}`);
      }

}
// function annualSalaryTotal(){
    

// }