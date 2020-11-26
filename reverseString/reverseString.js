const reverseString = function(string) {
    let reversedStr = '';
      for(let i = 0; i <= string.length; i++) {
       reversedStr += string.charAt(string.length - i);
      }   
      console.log(reversedStr);
}