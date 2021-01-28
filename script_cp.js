var button = document.getElementsByClassName('goal_btn')[0];

button.addEventListener('click', clickButton);

var bool_onclick = false
var color = "#B291EB";
var stTime;
var endTime = 0;

var min;
var sec;
var milisec;
var nowTime;
var militime = 0;
var time = 0;
function clickButton() {

  if (bool_onclick === false) {
    button.style.background = color;
    bool_onclick = true;

    timerStart = setInterval(function() {
      time++;
      hour = addZero(parseInt(time/3600));
      min = addZero(parseInt((time%3600)/60));
      sec = addZero(parseInt(time%60));
      document.getElementById('goal_txt').innerHTML = hour+":"+min+":"+sec;
      button.innerHTML = "눌러보세요!"
      console.log(milisec)
    },1000);
  } else {
    if(timerStart) {
      clearInterval(timerStart);
      button.style.background = "#FFFFFF";
      bool_onclick = false;
    }
  }
}

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}
