$(document).ready(function(){
  // call functions here

  $("form").submit(function() {
    submitForm(event)
  })
});

// define functions here
function submitForm(event) {
  let ol = $("ol")
  let li = $("<li></li>").text($("#item").val())
  ol.append(li)
  event.preventDefault()
}
