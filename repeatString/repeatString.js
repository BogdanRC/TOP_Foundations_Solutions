const repeatString = function(str, repeatAmount) {
  let loopedStr = '';
  for(i = 0; i < repeatAmount; i++) {
    loopedStr += str;
  }
  console.log(loopedStr);
}

module.exports = repeatString
