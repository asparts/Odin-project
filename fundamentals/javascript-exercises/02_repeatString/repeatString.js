const repeatString = function(string, times) {

    var s = "";

    if(times < 0)
        return "ERROR";
    for(var i = 0; i < times; i++)
    {
        s += string;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
