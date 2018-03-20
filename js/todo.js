$(document).ready(function(){
  // call functions here
  submitForm();
})

//define functions here
function submitForm(){
  $('form').on('submit', function(event){
    event.preventDefault();
    var li = $('#item').val(); //doesn't like let
    $('#list ol').append( '<li>' + li + '</li>' );
    $('#item').val("")
  });
}

//instead of .addEventListener() use the jquery .on which can deal with jquery returning an array
//same for .value should be .val()
//and .append is the same .append
