$(document).ready(function(){
  submitForm();
  });

  function submitForm(){
    $('form').on('submit', function(event){
      var inputValue = $('#item').val();
      $('ol').append( '<li>' + inputValue + '</li>' );
      event.preventDefault();
    });
  }


  
