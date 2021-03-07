const repeatString = (string,times) => {
   if (times >=0) {
    return string.repeat(times);
   }
   else {
       return 'ERROR';
   }
}
module.exports = repeatString
