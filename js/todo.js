$(document).ready(function(){
  // call functions here


  $('#submit').on('click', (event) => {
    event.preventDefault()
    const listItem = $('#item').val()
    $('#list').append(`<li>${listItem}</li>`)
  })

  
});

// define functions here
