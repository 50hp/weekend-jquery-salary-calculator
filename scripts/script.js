$(onReady)

function onReady() {
  console.log('hello');

  $('#submitBtn').on('click',addToTable);



}



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
 console.log(inputOne, inputTwo, inputThree, inputFour, inputFive);

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

  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#inputThree').val('');
  $('#inputFour').val('');
  $('#inputFive').val('');


}