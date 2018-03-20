$(document).submit(function(){
  preventDefault(event)
});

// define functions here
function preventDefault(event) {
  let ol = $('ol')
  let li = $('<li></li>').text($('#item').val())
  ol.append(li)
  event.preventDefault()
}
