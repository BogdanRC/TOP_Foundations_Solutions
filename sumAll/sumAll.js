const sumAll = function(a, b) {
 
  if(a < 0 || b < 0){
    return 'ERROR';
  }

  if(a == 'ERROR' || b == 'ERROR'){
    return 'ERROR';
  }

  if( typeof(a) != 'number' || typeof(b) != 'number'){
    return 'ERROR';
  }

  let sum = 0;

  if (a < b) {
    while (a <= b) {
      sum += a;
      a++;
    }
    return sum;
  }

  if (a > b) {
    let tempVal = a;
    while (b <= tempVal) {
      sum += b;
      b++;
    }
    return sum
  }

}


sumAll(4, 1);

module.exports = sumAll
