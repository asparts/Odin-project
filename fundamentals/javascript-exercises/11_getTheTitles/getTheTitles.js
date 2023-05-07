const getTheTitles = function(array) {

    var arr = Array.from(array);
    var s = [];
    arr.forEach((title) => {
        s.push(title.title);
    }); 
    
    return s;
};

// Do not edit below this line
module.exports = getTheTitles;
