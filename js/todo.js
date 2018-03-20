

$(document).ready(function(){
  // call functions here
  let submitForm = document.getElementById('submit-form')
  submitForm.addEventListener('click', function(event) {
    event.preventDefault()
    addTask(event)
  })
});

// define functions here
function addTask(event){
  let list = document.getElementById('list')
  let li = document.createElement('li')
  let input = document.getElementById('item')
  li.innerText = input.value
  list.append(li)
}
