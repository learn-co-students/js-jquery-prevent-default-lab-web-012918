$(document).ready(function(){
  // call functions here
  const addItemSubmit = document.querySelector('form')
  addItemSubmit.addEventListener('submit', createItem)
});

function createItem() {
  event.preventDefault()
  let itemInputField = document.getElementById('item').value
  let itemLi = document.createElement('li')
  itemLi.innerText = itemInputField
  let itemList = document.getElementById('list')
  itemList.appendChild(itemLi)
  document.getElementById('item').value = ""
}
