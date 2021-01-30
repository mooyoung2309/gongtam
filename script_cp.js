let Item = class {
  time = 0;
  onclick = true;
  constructor(li,btn,timer,list,idx) {
    this.list = list;
    this.idx = idx;
    this.li = li;
    this.btn = btn;
    this.timer = timer;
    console.log(this.idx)
    //btn과 timer을 담을 li생
    li = document.createElement('li');
    li.setAttribute("class", "list-group-item");
    li.setAttribute("id","li"+idx);
    //btn생성
    btn = document.createElement('button');
    btn.setAttribute("class", "btn-group-item");
    btn.setAttribute("id", "btn"+idx);
    btn.addEventListener('click',this.clickButton);
    //timer생성
    timer = document.createElement('span');
    timer.setAttribute("class", "timer-group-item");
    timer.setAttribute("id", "timer"+idx);
    timer.innerHTML = "00:00:00"
    //부모 연결
    li.appendChild(btn);
    li.appendChild(timer);
    list.appendChild(li);
  }
  clickButton() {
    if(onclick) {

    }
  }

}

var button = document.getElementsByClassName('goal_btn')[0];
var list = document.getElementById('list')
var bool_onclick = [];
var time = [];
var item = [];
var btn = [];
var timer = [];
var timerStart = [];
//button.addEventListener('click', clickButton);
//__init__(10)

var tmp_li;
var tmp_btn;
var tmp_timer;

var items = new Item(tmp_li,tmp_btn,tmp_timer,list,0)

// for(var i=0; i<10; i++) {
//   (function(m) {
//     btn[m].addEventListener('click',clickButtonTest,false);
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

function clickButtonTest() {
  i = 0
  i++;
  console.log(i);
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
