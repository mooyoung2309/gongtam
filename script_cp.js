var button = document.getElementsByClassName('goal_btn')[0];
var list = document.getElementById('list')
var bool_onclick = [];
var time = [];
var item = [];
var btn = [];
var timer = [];
var timerStart = [];
//button.addEventListener('click', clickButton);
__init__(10)
btn[0].addEventListener('click',clickButton());
// for(var i=0; i<10; i++) {
//   (function(m) {
//     btn[m].addEventListener('click',clickButton(m));
//   })(i);
//
//   time[i] = 0;
// }

function __init__(num) {
  for(var i=0; i<num; i++) {
    item[i] = document.createElement('li');
    item[i].setAttribute("class", "list-group-item");
    item[i].setAttribute("id","li"+i);
    list.appendChild(item[i])

    btn[i] = document.createElement('button');
    btn[i].setAttribute("class", "btn-group-item");
    btn[i].setAttribute("id", "btn"+i);
    item[i].appendChild(btn[i]);

    timer[i] = document.createElement('span');
    timer[i].setAttribute("class", "timer-group-item");
    timer[i].setAttribute("id", "timer"+i);
    timer[i].innerHTML = "00:00:00"
    item[i].appendChild(timer[i]);



  }
}

function clickButton() {
  i = 0
  console.log("버튼 누르")
  if (bool_onclick[i] == null) {
    //1초 마다 반복
    timerStart[i] = setInterval(function() {
      time[i]++;
      hour = addZero(parseInt(time[i]/3600));
      min = addZero(parseInt((time[i]%3600)/60));
      sec = addZero(parseInt(time[i]%60));
      timer[i].innerHTML = hour+":"+min+":"+sec;
      console.log("체크")
    },1000);

    btn[i].style.background = "#B291EB";
    btn[i].innerHTML = "시작됨"
    bool_onclick[i] = true;
  } else {
    console.log("중지")
    if(timerStart[i]) {
      //정지
      clearInterval(timerStart[i]);
      btn[i].innerHTML = "정지됨"
      btn[i].style.background = "#ff6666";
      bool_onclick[i] = false;
    }
  }
}

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}
