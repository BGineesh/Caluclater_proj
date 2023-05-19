

var button = document.getElementsByTagName("button");
var display = document.getElementById("display");

var operator;

var operand1;
var operand2;

function isOperator(value) {
  if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%')
    return true;
}

function calc(value, text) {
  if (isOperator(value)) {
    operator = value;
    operand1 = parseFloat(text);
    display.textContent = '';
  }

  else if (value == 'sign' || value == '!') {
    operand1 = -1 * parseFloat(text);
    display.textContent = operand1;
  }

  else if (value == 'ac' || value == 'Backspace' || value == 'Delete' || value == 'Escape') {
    display.textContent = "";
  }

  else if (value == 'per') {
    operand1 = parseFloat(text);
    display.textContent = operand1 / 100;
  }

  else if (value == '.') {
    if (text.length >= 1 && !text.includes('.'))
      display.textContent = text + ".";
  }

  else if (value == '=' || value == 'Enter') {
    operand2 = parseFloat(text);
    var result = eval(operand1 + ' ' + operator + ' ' + operand2)
    result = result.toPrecision(3);
    display.textContent = result;
    operand1 = result;
    operator = null;
    operand2 = null;

  }

  else if (value >= 0 && value <= 9)
    display.textContent += value;

}


for (var i = 0; i < button.length; i++) {

  button[i].addEventListener('click', function () {
    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();
    calc(value, text);
  });
}


document.addEventListener('keyup', function (event) {
  var text = display.textContent.trim();
  calc(event.key, text);
});