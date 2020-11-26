const ftoc = function(fTemp) {
  if (fTemp == 32) {
    return 0;
  } else {let fTempToC = (fTemp - 32) * (5/ 9);
  return Number(fTempToC.toFixed(1));
  }
}

const ctof = function(cTemp) {
  if (cTemp == 0) {
    return 32;
  } else {
    let cTempToF = (cTemp * (9/5)) + 32;
    return Number(cTempToF.toFixed(1));
  }
  
}

module.exports = {
  ftoc,
  ctof
}
