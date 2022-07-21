let check = document.getElementById("check");
let clear = document.getElementById("clear");
let input = document.getElementById("input");
let result = document.getElementById("result");

check.addEventListener("click", output)
clear.addEventListener("click", fclear)

function isEmailValid(email) {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
  return emailRegexp.test(email)
}

function output() {
  var BOOL = isEmailValid(input.value)
  if (BOOL == true) {
    result.innerHTML = "Yes"
  }
  else {
    result.innerHTML = "No"
  }
}

function fclear() {
  input.value = ""
  result.innerText = ""
}