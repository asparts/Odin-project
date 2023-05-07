const reverseString = function(string) {

    var s = "" + string;
    var length = s.length;
    var reversedString = "";
    for(var i = length; i > 0; i--)
    {
        reversedString += s.charAt(i - 1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
