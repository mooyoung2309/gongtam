var button = document.getElementsByClassName('goal_btn')[0];
var bool_onclick = false
var time = 0;

button.addEventListener('click', clickButton);

function __init__() {
  
}

function clickButton() {
  if (bool_onclick === false) {
    //1초 마다 반복
    timerStart = setInterval(function() {
      time++;
      hour = addZero(parseInt(time/3600));
      min = addZero(parseInt((time%3600)/60));
      sec = addZero(parseInt(time%60));
      document.getElementById('goal_txt').innerHTML = hour+":"+min+":"+sec;
    },1000);

    button.style.background = "#B291EB";
    button.innerHTML = "시작됨"
    bool_onclick = true;
  } else {
    if(timerStart) {
      //정지
      clearInterval(timerStart);
      button.innerHTML = "정지됨"
      button.style.background = "#ff6666";
      bool_onclick = false;
    }
  }
}

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}
