const removeFromArray = function(array, ...args) {

    var length = args.length;
    var arr = Array.from(array);
    for(var i = 0; i < length; i++)
    {
        if(arr.includes(args[i]))
            arr.splice(arr.indexOf(args[i]), 1);
    }
return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
