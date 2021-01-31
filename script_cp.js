var button = document.getElementsByClassName('goal_btn')[0];
var list = document.getElementById('list')
var items = [];
var Item = function(list) {
  this.clicked = true;
  this.time = 0;
  this.timerStart;
  this.li = document.createElement('li');
  this.btn = document.createElement('button');
  this.timer = document.createElement('span');

  this.li.setAttribute("class", "list-group-item");
  this.btn.setAttribute("class", "btn-group-item");
  this.btn.innerHTML = "누르면 타이머 시작"
  this.timer.setAttribute("class", "timer-group-item");
  this.timer.innerHTML = "00:00:00"
  this.li.appendChild(this.btn);
  this.li.appendChild(this.timer);
  list.appendChild(this.li);
}

for(var i=0; i<3; i++) {
  (function() {
    var tmp = new Item(list);
    tmp.btn.addEventListener('click', function() {clickButton(tmp)});
    items[i] = tmp;
  })();
}

function clickButton(self) {
  console.log(this.clicked);
  if (self.clicked == null || self.clicked) {
    //1초 마다 반복
    self.timerStart = setInterval(function() {
      self.time++;
      hour = addZero(parseInt(self.time/3600));
      min = addZero(parseInt((self.time%3600)/60));
      sec = addZero(parseInt(self.time%60));
      self.timer.innerHTML = hour+":"+min+":"+sec;
    },1000);

    self.btn.style.background = "#B291EB";
    self.btn.innerHTML = "타이머 실행중"
    self.clicked = false;
  } else {
    if(self.timerStart) {
      clearInterval(self.timerStart);
      self.btn.innerHTML = "타이머 정지됨"
      self.btn.style.background = "#ff6666";
      self.clicked = true;
    }
  }
}

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}
