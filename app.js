const result = document.querySelector('#result');

function clearScreen() {
    result.value = "";
}
   
function display(value) {
    result.value += value;
}

function calculate() {
    var p = result.value;
    var q = eval(p);
    document.getElementById("result").value = q;
}