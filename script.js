var previousOperation = null;

/**
 * Created by Home on 21.10.2016.
 */
function inputNumber(number) {
    var outputText = document.getElementById("input-area").value;
    document.getElementById("input-area").value = outputText + number;
}

function inputSymbol(currentOperation) {
    var outputText = document.getElementById("input-area").value;
    var splitNumbers;
    var result;
    if (previousOperation) {
        splitNumbers = outputText.split(currentOperation);
        var firstValue = parseFloat(splitNumbers[0]);
        var secondValue = parseFloat(splitNumbers[1]);

        switch (currentOperation) {
            case'+':
                result = firstValue + secondValue;
                break;
            case'-':
                result = firstValue - secondValue;
                break;
            case'*':
                result = firstValue * secondValue;
                break;
            case'/':
                if (secondValue == 0) {
                    result = "Error";
                }
                else
                    result = firstValue / secondValue;
                break;
        }
    }
    document.getElementById("input-area").value = result;

    if (!previousOperation || previousOperation != '=') {
        previousOperation = currentOperation;
    } else {
        previousOperation = null;
    }
}
