$(document).ready(function(){
  // JY
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    submitButtonClicked(event)
  })
  // submitForm();
});

// JY
function submitButtonClicked(event) {
  let submitTerm = $("#item").val()
  $('ol').append(`<li>${submitTerm}</li>`)
}

// function submitForm(){
//   $('form').on('submit', function(event){
//     var listItem = $('#item').val();
//     $('ol').append( '<li>' + listItem + '</li>' );
//     event.preventDefault();
//   });
// }
