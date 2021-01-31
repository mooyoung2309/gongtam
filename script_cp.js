var button = document.getElementsByClassName('goal_btn')[0];
var list = document.getElementById('list')
var onclick = [];
var time = [];
var items = [];
var btn = [];
var timer = [];
var timerStart = [];
//button.addEventListener('click', clickButton);
//__init__(10)

var tmp_li;
var tmp_btn;
var tmp_timer;

__init__(10)

function __init__(num) {
  for(var i=0; i<num; i++) {
    var li, btn, timer, idx;
    idx = i;
    li = document.createElement('li');
    li.setAttribute("class", "list-group-item");
    li.setAttribute("id","li"+i);
    //btn생성
    btn = document.createElement('button');
    btn.setAttribute("class", "btn-group-item");
    btn.setAttribute("id", "btn"+i);
    btn.addEventListener('click',function() {clickButton(idx)});
    console.log(i);
    //timer생성
    timer = document.createElement('span');
    timer.setAttribute("class", "timer-group-item");
    timer.setAttribute("id", "timer"+i);
    timer.innerHTML = "00:00:00"
    //부모 연결
    li.appendChild(btn);
    li.appendChild(timer);
    list.appendChild(li);

    items[i] = li;
    btn[i] = btn;
    timer[i] = timer;
    time[i] = 0;
  }
  console.log(items);
  console.log(time);
}

function clickButtonTest() {
  console.log(this.time);
}

function clickButton(i) {
  console.log(i)
  if (onclick[i]==null || onclick[i]==true) {
    //1초 마다 반복
    timerStart = setInterval(function() {
      time[i]++;
      hour = addZero(parseInt(time[i]/3600));
      min = addZero(parseInt((time[i]%3600)/60));
      sec = addZero(parseInt(time[i]%60));
      timer[i].innerHTML = hour+":"+min+":"+sec;
      console.log(time[i])
    },1000);

    btn[i].style.background = "#B291EB";
    //items[i].getElementById('btn'+i).innerHTML = "시작됨"
    onclick[i] = false;
  } else {
    console.log("중지")
    if(timerStart) {
      //정지
      clearInterval(timerStart);
      btn[i].innerHTML = "정지됨"
      btn[i].style.background = "#ff6666";
      onclick[i] = true;
    }
  }
}




// function clickButton() {
//   if (bool_onclick[i] == null) {
//     //1초 마다 반복
//     timerStart[i] = setInterval(function() {
//       time[i]++;
//       hour = addZero(parseInt(time[i]/3600));
//       min = addZero(parseInt((time[i]%3600)/60));
//       sec = addZero(parseInt(time[i]%60));
//       timer[i].innerHTML = hour+":"+min+":"+sec;
//       console.log("체크")
//     },1000);
//
//     btn[i].style.background = "#B291EB";
//     btn[i].innerHTML = "시작됨"
//     bool_onclick[i] = true;
//   } else {
//     console.log("중지")
//     if(timerStart[i]) {
//       //정지
//       clearInterval(timerStart[i]);
//       btn[i].innerHTML = "정지됨"
//       btn[i].style.background = "#ff6666";
//       bool_onclick[i] = false;
//     }
//   }
// }

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}
