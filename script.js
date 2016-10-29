/**
 * Created by Home on 21.10.2016.
 */
var operation;
var count = 0;
var secondOperation;
function inputNumber(number) {
  var outputText = document.getElementById("input-area").value;
  if (outputText != 'Error')
    document.getElementById("input-area").value = outputText + number;
  else {
    document.getElementById("input-area").value = number;
  }
}
function inputSymbol(symbol) {
  var outputText = document.getElementById("input-area").value;
  var result;
  if (outputText != 'Error') {
    if (symbol == '=') {
      if (count != 0) {
        var splitNumbers = outputText.split(operation);
        var firstValue = parseFloat(splitNumbers[0]);
        var secondValue = parseFloat(splitNumbers[1]);
        switch (operation) {
          case '+':
            result = firstValue + secondValue;
            break;
          case'-':
            result = firstValue - secondValue;
            break;
          case '*':
            result = firstValue * secondValue;
            break;
          case '/':
            if (secondValue == 0) {
              result = "Error";
            }
            else
              result = firstValue / secondValue;
            break;
        }
        if (count == 1) {
          document.getElementById("input-area").value = result;
          count = 0;
        }
        else {
          document.getElementById("input-area").value = result + secondOperation;
          operation = secondOperation;
          count = 1;
        }
      }
    }
    else {
      if (outputText != '') {
        count = count + 1;
        if (count == 1) {
          operation = symbol;
          document.getElementById("input-area").value = outputText + symbol;
        }
        else if (count == 2) {
          if (outputText [outputText.length - 1] == operation) {
            operation = symbol;
            document.getElementById("input-area").value = outputText.substring(0, outputText.length - 1) + symbol;
            count = count - 1;
          }
          else {
            secondOperation = symbol;
            inputSymbol('=');
          }
        }
      }
    }
  }
}
function outputDelete(deleteSymbol) {
  var outputText = document.getElementById("input-area").value;
  if (deleteSymbol == 'CE') {
    document.getElementById("input-area").value = '';
  }
  else if (deleteSymbol == 'C') {
    if (outputText != 'Error') {
      document.getElementById("input-area").value = outputText.substring(0, outputText.length - 1);
    }
  }
}