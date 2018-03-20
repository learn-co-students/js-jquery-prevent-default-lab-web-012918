$(document).ready(function(){
  // call functions here
  ToDoList()
});

// define functions here

function ToDoList() {
  let list = $('#list ol')
  $('form').submit(function(event){
    event.preventDefault()
    let li = document.createElement('li')
    li.innerText = $('#item')[0].value
    list.append(li)
  })
}
