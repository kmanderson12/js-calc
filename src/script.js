/*
Math is a wonderful thing
Math is a very cool thing
So get off your ath let's do some math
Math, math, math, math, math
- Jack Black, as Dewey Finn, as Ned Schneebly
*/

const button = Array.from(document.querySelectorAll(".button"));
const screen = document.querySelector(".display");
document.addEventListener('keydown', (event) => {
  event.preventDefault()
  const accept = ['Escape','Backspace','/','*','7','8','9','-','4','5','6','+','1','2','3','=','0','.','Enter']
  
  function getKey(key) {
    return key === "Backspace" ? "CE" : (key === "Escape" ? "AC" : (key === "Enter" ? "=" : key))
  }
  if (accept.includes(event.key)) {
    let key = getKey(event.key)
    event.value = key
    calcThis(event)
    
  }
  
  return
})
function calcThis(e) {

  const value = e.type == "click" ? this.getAttribute("value") : e.value
  
  var result = "",
    display = screen.innerHTML;
  if (display.length > 14 && display.length < 24) {
  screen.style.fontSize = '0.7em'
  } else if (display.length >= 24) {
    screen.style.fontSize = '0.3em'
  }
  
  else {
    screen.style.fontSize = '1em';
  }
  if (value === "=") {
    if(screen.innerHTML == "") {
      return
    }
    result = eval(screen.innerHTML);
    screen.innerHTML = result;
  } else if (value === "AC") {
    screen.innerHTML = "";
  } else if (value === "CE") {
    screen.innerHTML = display.substr(0, display.length - 1);
  } else if (value === ".") {
    if (display.includes(".")) {
      return;
    } else {
      screen.innerHTML += value;
    }
  } else if (value === "/" || value === "*" || value === "-" || value === "+") {
    var regex = new RegExp(/[\\*+-]/g);
    if (
      display.endsWith("/") ||
      display.endsWith("*") ||
      display.endsWith("-") ||
      display.endsWith("+")
    ) {
      return;
    } else if (display === '') {
      return
    }
    
    else {
      screen.innerHTML += value;
    }
  } else {
    screen.innerHTML += value;
  }
}



if(Modernizr.touchevent) {
  button.forEach(button => button.addEventListener("touchend", calcThis));
} else {
  
  button.forEach(button => button.addEventListener("click", calcThis));
}

