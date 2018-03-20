$(document).ready(function(){
  // call functions here
  $('form')[0].addEventListener('submit', function(event){
    event.preventDefault()
    add()
  })

  function add(){
    let li = document.createElement('li')
    li.innerHTML = $('#item')[0].value
    $("#list ol")[0].append(li)
  }

});
