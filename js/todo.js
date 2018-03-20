$(document).ready(function(){
  // call functions here
  preventSubmitRefresh()
});

// define functions here

function addTask(){
  let new_task = $('<li></li>').addClass('task');
  new_task.attr('id', 'new_task')
  new_task.text($('#item').val()) //$('#item').val()
  new_task.appendTo('ol.list')
}

function preventSubmitRefresh(){
  $('#target').submit(function(e){
    e.preventDefault();
  });
}
