const findTheOldest = function(array) {
    return array.reduce((a, b) => {
      const aAge = getAge(a.yearOfBirth, a.yearOfDeath);
      const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
      return aAge > bAge ? a : b;
    })
  }
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }

module.exports = findTheOldest
