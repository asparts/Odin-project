const findTheOldest = function(people) {
    
    var arr = Array.from(people);
    
    var s = [];

    arr.forEach((person) => {
        var obj = {};
        obj["name"] = person.name;
        obj["age"] = (person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth)
        s.push(obj);
    }); 
    s = s.sort((a, b) => parseInt(b.age) - parseInt(a.age));
    
    //return s[0]["name"];
    var o = Object.values(s[0])[0];
    var obj = {name: o}
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
