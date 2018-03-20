$(document).ready(function(){

  $('form')[0].addEventListener('submit', addListItem)
});


function addListItem(event) {
  console.log("Hello vorld")
  event.preventDefault()

  $('#list').append(`<li>${$('#item')[0].value}</li>`)

}
