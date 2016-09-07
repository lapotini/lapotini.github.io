
 var modulePow = {
    pow: function(num, degr) {
    var result = 1;
    var resultDop = 1;
    if(degr >= 0){
      for(var y = degr; y > 0; y--){
        result *= num;
      }

     }
     else{
       for(var z = degr; z < 0; z++) {
          resultDop *= num;
          result = 1/resultDop;
        }
       }
       return result;
      // console.log('Результат ' + i + ' = ' + result);
     }
 };



try {
module.exports = modulePow;

} catch (e) {

}

//
// for (var i = 1; i < 6; i++){
//   var numEnter = prompt("Vvedite chislo №" + i);
//   var degrEnter = prompt("Vvedite stepen' №" + i);
//   modulePow.pow(numEnter, degrEnter);
//
// }
