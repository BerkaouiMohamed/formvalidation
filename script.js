var $form = document.getElementsByTagName("form")[0];
var $name = document.getElementsByTagName("input")[0];
var $email = document.getElementsByTagName("input")[1];
var $adress = document.getElementsByTagName("input")[2];
var $root = document.getElementById("root");
$form.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = $name.value;
  var email = $email.value;
  var adress = $adress.value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (name.length < 3) {
error('name must be longer then 3 words ',true)
  }
  else if (regex.test(email) == false) {
error("email not valid",true)
  }
  else {
error("done",false)

  }
});


function error(message,isError){
  var $message = document.createElement("div");
  $message.style.backgroundColor = isError?"red":"green"
  $message.innerHTML =message;
  $root.innerHTML = "";
  $root.appendChild($message);
}