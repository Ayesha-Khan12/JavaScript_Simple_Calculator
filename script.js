function calculate(operator){
let firstNumber = +document.getElementById("firstnumber").value;
let secondNumber = +document.getElementById("secondnumber").value;

let result;


if (operator === '+'){
    result = firstNumber + secondNumber;
}
else if (operator === '-'){
    result = firstNumber - secondNumber;
}
else if (operator === '*'){
    result = firstNumber * secondNumber;
}
else if (operator === '/'){
    if(secondNumber === 0){
        alert("Cannot divide by zero");
        return;
    }
    result = (firstNumber / secondNumber).toFixed(2);
}
else{
    alert("Put Number In Boxes");
}
document.getElementById("result").innerHTML = result;
}
function reset(){
    document.getElementById("firstnumber").value = "";
    document.getElementById("secondnumber").value = "";
    document.getElementById("result").innerHTML = "";
}