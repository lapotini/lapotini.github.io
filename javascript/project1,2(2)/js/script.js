
  var arrayName = [];
  for(var i = 0; i < 5; i++){
    arrayName[i] = prompt("Enter random name №" + i);
    console.log(arrayName[i]);
  }

  var userName = prompt("Enter your name");

function proverkaZna4enya(value, array){
  for(var i = 0; i < array.length; i++){
    if(value == array[i]){
      return true;
    }
   }
     return false;
}

   if(proverkaZna4enya(userName, arrayName)){
     alert(userName + ' , вы успешно вошли');
   } else {
      alert('Ошибка, такого имени не существует');
   }
