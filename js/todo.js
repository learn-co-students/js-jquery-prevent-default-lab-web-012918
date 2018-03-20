$(document).ready(function(){
  // call functions here
  $('form').on('submit', (event) => {addItemToList(event)})
});


function addItemToList(event){
  event.preventDefault()
  let item = $('#item').val()
  $('#list ol').append(`<li> ${item} </li>`)
}
