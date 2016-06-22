//var dataa = new new Date(year, month, date, hours, minutes, seconds, ms);

  var startButton = document.getElementById('start');
  var resetButton = document.getElementById('reset');
  var interval = document.getElementById('interval');
  var body = document.querySelector('body');
  var wrapper = document.getElementsByClassName('resultContainer');

  var active = false;
  var startPause = 0;
  var show = false;
  var startTime;

  startButton.addEventListener('click', activeGO);
  interval.addEventListener('click', intervalShow);
  resetButton.addEventListener('click', reset);

  function activeGO() {
    if(active == false){
      active = true;
      show = true;
      startTime = new Date();
      go();
      document.getElementById('start').innerHTML = "Stop";
     }
     else{
       if(active == true){
         active = false;
         pauseTime = new Date();
         document.getElementById('start').innerHTML = "Start";
         startPause++;
         if (startPause > 0){
          intervalShow();
         }
        }
      }
     }

    function intervalShow(){
      if(show == true){

        var timeResult = document.createElement('p');
        timeResult.className = "Interval";
        timeResult.innerHTML = timeInterval;

        timeResult.style.fontSize = '30px';
        timeResult.style.fontFamily = 'Arial';
        timeResult.style.color = 'yellow';
        timeResult.style.margin = '10px';
        wrapper[0].insertBefore(timeResult, wrapper[0].firstChild);
       }
    }

    function reset() {
      active = false;
      startPause = 0;
      show = false;
      clearTimeout(go, 10);
      document.getElementById('start').innerHTML = "Start";
      var clear = document.querySelectorAll('p');
      var timer = document.getElementById('timerNum');
      timer.innerHTML = '00 : 00 : 00 : 000';
        for (i = 0; i < clear.length; i++){
          clear[i].remove();
         }
       }

       //
      //  function pause(){
      //  if(active == false){
      //    alert('t');
      //  }
      //  setTimeout(prob,3000);
      //  }



//  function zz(){
//   var date = new Date();
//   var time = date.getTime();
//   var zeroTime = time - time;
//   console.log(time);
// }
// setInterval(zz, 1000);

  function go() {
    var timer = document.getElementById('timerNum');
    var goTime = new Date();

    if(active == true){
      


      if(startPause > 0){
        zeroTime = goTime.getTime() - pauseTime.getTime();

      }
      else{
        zeroTime = goTime.getTime() - startTime.getTime();
      }

      var milliseconds = zeroTime % 1000;
      var seconds = Math.floor(zeroTime/1000);
      var seconds = seconds % 60;
      var minutes = Math.floor(zeroTime/60000);
      var minutes = minutes % 60;
      var hours = Math.floor(zeroTime/3600000);


        if(hours < 10){
        hours = "0" + hours;
        }
        if(minutes < 10){
        minutes = "0" + minutes;
        }
        if(seconds < 10){
        seconds = '0' + seconds;
        }
        if(milliseconds < 10){
        milliseconds = '00' + milliseconds;
        }
        if(milliseconds < 100){
          milliseconds = '0' + milliseconds;
        }


        timer.innerHTML = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
        timeInterval = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
    }
       setTimeout(go, 10);
   }




//peremennay.getTime();
// for (i = 0; i < arrayTime.length;i++){
// console.log( arrayTime[i]);}

//https://learn.javascript.ru/datetime
