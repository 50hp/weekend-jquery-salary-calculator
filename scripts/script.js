$(onReady)

function onReady() {
  console.log('hello');

  $('#submitBtn').on('click',handleSubmit);



}



function handleSubmit(event) {

  //use the event arg to stop default page reload.
  event.preventDefault();
  let inputOne;
  let inputTwo;
  //grab val from the inputs

 inputOne = $('#inputOne').val();
 inputTwo = $('#inputTwo').val();
 inputThree = $('#inputThree').val();
 inputFour = $('#inputFour').val();
 inputFive = $('#inputFive').val();
 console.log(inputOne, inputTwo, inputThree, inputFour, inputFive);

  // $('#listArea').append(`
  // <li class="listItem">
  //     <button class="todoBtn">🚫</button>
  //     ${inputOne} ${inputTwo}
  // </li>
  // `);

  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#inputThree').val('');
  $('#inputFour').val('');
  $('#inputFive').val('');

  // countValue();



}