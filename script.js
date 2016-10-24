/**
 * Created by Home on 21.10.2016.
 */
function inputNumber(number) {
    var outputText = document.getElementById("input-area").value;
    document.getElementById("input-area").value = outputText + number;
    switch (number) {
        case  's+':
            document.getElementById("input-area").value = outputText + "+";
            break;
        case 's-':
            document.getElementById("input-area").value = outputText + "-";
            break;
        case 's*':
            document.getElementById("input-area").value = outputText + "*";
            break;
        case 's/':
            document.getElementById("input-area").value = outputText + "/";
            break;

        case 's=':
            var splitNumbers;
            var result;
            for ( var i = 0; i < outputText.length; i++) {
                switch (outputText[i]) {
                    case '+':
                    splitNumbers = document.getElementById("input-area").value.split("+");
                    result = parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[1]);
                        break;

                    case '-':
                    splitNumbers = document.getElementById("input-area").value.split("-");
                    result = parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[1]);
                        break;

                    case  '*':
                    splitNumbers = document.getElementById("input-area").value.split("*");
                    result = parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[1]);
                break;
                    case  '/':
                    splitNumbers = document.getElementById("input-area").value.split("/");
                    if (parseFloat(splitNumbers[1]) == 0) {
                        result = "Error";
                    }
                    else
                        result = parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[1]);

                break;
            }
            document.getElementById("input-area").value = result;

    }
}
}
