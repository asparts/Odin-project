
let calcString;
var operatorClicked = false;
var divideByZero = false;
window.onload = function(){

    calcString = document.getElementById('text-area-text');
}

function numClick(num)
{
    if(divideByZero == true)
        clearClick();
    calcString.innerText += num;
}
function operatorClick(operator)
{
    if(operatorClicked == true)
    {
        operate();
        calcString.innerText += operator;
    }
    else 
    {
        calcString.innerText += operator;
        operatorClicked = true;
    }

    
}
function operate()
{
    var numbers = [];
    var operators = [];
    var s_cal = "" + calcString.innerText;
    var temp = "";
        for(var i = 0; i < s_cal.length+1; i++)
        {
            if(Number.isInteger((parseInt((s_cal[i])))))
            {
                temp+=s_cal[i];
            }
            else
            {
                numbers.push(parseInt(temp));
                operators.push(s_cal[i]);
                temp = "";
            }
        }
        var total = calculate(operators[0], numbers[0], numbers[1]);
        calcString.innerText = total;
}
function calculate(op, a, b)
{
    switch (op) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          if (b == 0) {
            divideByZero = true;
            return "Cannot divide by zero";
          }
          return a / b;
      }
      return 0;
}
function clearClick()
{
    calcString.innerText = "";
    operatorClicked = false;
    divideByZero = false;
}
function backBtnClick()
{
    var tempstring = "" + calcString.innerText;
    calcString.innerText = tempstring.slice(0, -1);
}
function odinProject()
{
    window.location.href = "https://www.theodinproject.com/";
}