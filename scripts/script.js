// $(onReady)

// function onReady() {
//   console.log('hello');

//   $('#submitBtn').on('click',addToTable);
//   $('#tbody').on('click', '#delBtn', deleteRow);

// }

// let inputArray = 0;

// function addToTable(event) {

//   //use the event arg to stop default page reload.
//   event.preventDefault();
//   let inputOne;
//   let inputTwo;
//   let inputThree;
//   let inputFour;
//   let inputFive;

//   //grab val from the inputs

//  inputOne = $('#inputOne').val();
//  inputTwo = $('#inputTwo').val();
//  inputThree = $('#inputThree').val();
//  inputFour = $('#inputFour').val();
//  inputFive = $('#inputFive').val();
//  //console.log(inputOne, inputTwo, inputThree, inputFour, inputFive);

//   $('#tbody').append(`
//   <tr>
//     <td>${inputOne}</td>
//     <td>${inputTwo}</td>
//     <td>${inputThree}</td>
//     <td>${inputFour}</td>
//     <td>${inputFive}</td>
//     <td><button id="delBtn">Delete</button></td>
//   </tr>
//   `);


//    inputArray += Math.round(inputFive / 12);



//   $('#inputOne').val('');
//   $('#inputTwo').val('');
//   $('#inputThree').val('');
//   $('#inputFour').val('');
//   $('#inputFive').val('');

//     console.log(inputArray);

//     displayTotalMonthly();
// }

// function deleteRow(){
//       $('#delBtn').parent().parent().remove();
// }


//______________________________Stretch Goal Solution_____________________________________________________
//calls on ready function
$(onReady)

// on page load do this.
function onReady() {

  $('#submitBtn').on('click', addToTable);
  $('#tbody').on('click', `#deleteBtn`, deleteRow);
  displayTotalMonthly();
}

//initializes an empty array to store generated objects.
let tableDataArray = [];

//function to generate and push objects into the table data array.
//function to add row to the table on the DOM.
function addToTable(event) {

  //prevents reload on submit.
  event.preventDefault();

  //creates the 5 inputs for the object.
  let inputOne;
  let inputTwo;
  let inputThree;
  let inputFour;
  let inputFive;

  //takes inputs on dom and stores them in a variable. 
  inputOne = $('#inputOne').val();
  inputTwo = $('#inputTwo').val();
  inputThree = $('#inputThree').val();
  inputFour = $('#inputFour').val();
  inputFive = $('#inputFive').val();
  //clears out the forum on the DOM.
  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#inputThree').val('');
  $('#inputFour').val('');
  $('#inputFive').val('');

  //creates the object that gets put into the array.
  let tableDataObject = {
    inputOne: inputOne,
    inputTwo: inputTwo,
    inputThree: inputThree,
    inputFour: inputFour,
    inputFive: inputFive,
  }

  // adds a table row to the DOM
  $('#tbody').append(`
            //   <tr>
            //     <td>${tableDataObject.inputOne}</td>
            //     <td>${tableDataObject.inputTwo}</td>
            //     <td>${tableDataObject.inputThree}</td>
            //     <td>${tableDataObject.inputFour}</td>
            //     <td>${tableDataObject.inputFive}</td>
            //     <td><button id="deleteBtn" data-last-value="${inputThree}">Delete</button></td>
            //   </tr>`);

  // pushes the object into the tableDataArray.
  tableDataArray.push(tableDataObject);
  //calls the function to total and display the monthly coast. 
  displayTotalMonthly();
}
//creates a row variable. 
let tableRow;

function deleteRow() {

  //pulls the data stored in the generated delete button. and sets that to tableRow.
  let tableRowData = $(this).data();
  tableRow = tableRowData.lastValue;

  //removes the selected table row from the DOM. 
  $(this).parent().parent().remove();

  //calls the function to delete an selected object for the specified array.
  deleteItem(tableDataArray, tableRow);
  //calls thee function to recount and run the math on monthly salary and displays that to the DOM.
  displayTotalMonthly();

}
// function to remove a specified object from the specified array. 
function deleteItem(array, value) {
  for (let i = 0; i < array.length; i++) {

    if (array[i].inputThree == value) {
      console.log('hello');
      tableDataArray.splice(i, 1);
    }
  }
}

//function to do the math and append the DOM for total Monthly Salary.
function displayTotalMonthly() {
  //creates a sum variable and an empty array. 
  let sumOfArray = 0;
  let array = [];

  //pushes all inputFives into the empty array array. 
  for (x of tableDataArray) {
    array.push(x.inputFive);
  }

  //calls the sumArray function to total all values divides it by 12 and rounds it.
  sumOfArray = Math.round(sumArray(array) / 12);

  //conditional to check the value of sumOfArray of and pushes css with the total if needed.
  if (sumOfArray > 20000) {
    $('#totalMonthly').empty()
    $('#totalMonthly').append(`
        <h4 style="background-color:red";>Total Monthly:
         $ ${sumOfArray}
         </h4>
         
         `);
  } else {
    $('#totalMonthly').text(`Total Monthly: $ ${sumOfArray}`);
  }

}

//function to add all values in an array. 
function sumArray(array) {
  let sum = 0;

  for (x of array) {
    x = x / 1;
    sum += x;

  }

  return sum;

}

