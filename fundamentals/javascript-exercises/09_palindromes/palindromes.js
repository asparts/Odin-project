const palindromes = function (string) {

    var s = "" + string;
    var ss = ""+string;
    var length = s.length;
    var reversedString = "";
    for(var i = length; i > 0; i--)
    {
        reversedString += s.charAt(i - 1);
    }
    
    s = s.toLocaleLowerCase();
    s = s.replace(/\s/g, ""); // removing space
    s = s.split('.').join('');
    s = s.split(',').join('');
    s = s.split('!').join('');
    reversedString = reversedString.toLocaleLowerCase();
    reversedString = reversedString.replace(/\s/g, "");
    reversedString = reversedString.split(',').join('');
    reversedString = reversedString.split('.').join('');
    reversedString = reversedString.split('!').join('');

    for(var i = 0; i < s.length; i++)
    {
        if(!(s.charAt(i).match(reversedString.charAt(i))))
        {
            return false;
        }
    }

        return true;

};

// Do not edit below this line
module.exports = palindromes;
