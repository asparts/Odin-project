const add = function(num1, num2) {
	
  return num1 + num2;
};

const subtract = function(num1, num2) {
	
  return num1 - num2;
};

const sum = function(array) {
	
  var arr = Array.from(array);
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(array) {

  var arr = Int16Array.from(array);
  
  var sum = arr[0].valueOf();
  for(var i = 1; i < arr.length; i++)
  {
    sum *= arr[i].valueOf();
  }
  

  return sum;
};

const power = function(num1, num2) {
	
  return Math.pow(num1, num2);
};

const factorial = function(num) {
	
  var f = 0;

  if(num == 0 || num == 1)
    return 1;

  f = 1;
  for(var i = num; i > 0; i--)
  {
    f = f * num;
    num--;
  }
  return f;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
