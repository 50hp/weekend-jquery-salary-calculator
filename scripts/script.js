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




$(onReady)

function onReady() {
  console.log('hello');

    $('#submitBtn').on('click',addToTable);
    $('#tbody').on('click', `#deleteBtn`, deleteRow);
    displayTotalMonthly();
}


let tableDataArray = [];


function addToTable(event) {


  event.preventDefault();

  let inputOne;
  let inputTwo;
  let inputThree;
  let inputFour;
  let inputFive;

        inputOne = $('#inputOne').val();
        inputTwo = $('#inputTwo').val();
        inputThree = $('#inputThree').val();
        inputFour = $('#inputFour').val();
        inputFive = $('#inputFive').val();

          $('#inputOne').val('');
          $('#inputTwo').val('');
          $('#inputThree').val('');
          $('#inputFour').val('');
          $('#inputFive').val('');

  let tableDataObject = {
    inputOne: inputOne,
    inputTwo: inputTwo,
    inputThree: inputThree,
    inputFour: inputFour,
    inputFive: inputFive,
            }


            $('#tbody').append(`
            //   <tr>
            //     <td>${tableDataObject.inputOne}</td>
            //     <td>${tableDataObject.inputTwo}</td>
            //     <td>${tableDataObject.inputThree}</td>
            //     <td>${tableDataObject.inputFour}</td>
            //     <td>${tableDataObject.inputFive}</td>
            //     <td><button id="deleteBtn" data-last-value="${inputThree}">Delete</button></td>
            //   </tr>`);

            
  tableDataArray.push( tableDataObject );
  console.log( tableDataArray );
  displayTotalMonthly();
}

let tableRow;

function deleteRow() {


      let tableRowData = $(this).data();
      tableRow = tableRowData.lastValue;
      let deletedRow = [];

      $(this).parent().parent().remove();

      deleteItem(tableDataArray, tableRow);
      displayTotalMonthly();

}

function deleteItem( array, value ){
console.log(array);
console.log(value);
  for (let i=0; i < array.length; i++){
    
      if ( array[i].inputThree == value ){
        console.log('hello');
        tableDataArray.splice(i, 1);
      }
  }
}

function displayTotalMonthly(){
  console.log('dispylayTotalMonthyl');
let sumOfArray = 0;
let array = [];

      for (x of tableDataArray){
        array.push(x.inputFive);
      }

console.log(array);

sumOfArray = Math.round(sumArray( array )/12);
console.log(sumOfArray);

      if(sumOfArray > 20000){
        $('#totalMonthly').empty()
        $('#totalMonthly').append(`
        <h4 style="background-color:red";>Total Monthly:
         $ ${sumOfArray}
         </h4>
         
         `);
      }else{
      $('#totalMonthly').text(`Total Monthly: $ ${sumOfArray}`);
      }

}

function sumArray( array ) {
let sum = 0;

    for ( x of array ){
        x = x/1;
        sum += x;

    }

return sum;

}

