$(document).ready(function(){
  newFunc()
})

function newFunc() {
  $('form').on('submit', function(event){
    let newItem = $('#item').val()
    let itemList = $('ol')
    itemList.append('<li>' + newItem + '</li>')
    event.preventDefault()
  })
}
