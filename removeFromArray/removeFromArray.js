const removeFromArray = function(...arguments) {
    let data = arguments;
    Array.from(data);
    for(let i = 0; data.length > 1; i++){
      data.pop();
    }
   return data;
}
module.exports = removeFromArray
