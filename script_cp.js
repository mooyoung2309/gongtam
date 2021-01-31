var button = document.getElementsByClassName('goal_btn')[0];
var list = document.getElementById('list')
var item = {
  li : li = document.createElement('li'),
  btn : btn = document.createElement('button'),
  timer : timer = document.createElement('span'),
  time : 0,
  idx : 0,
  onclick : true,
  init_item : function() {
    this.li.setAttribute("class", "list-group-item");
    this.li.setAttribute("id","li"+this.idx);

    this.btn.setAttribute("class", "btn-group-item");
    this.btn.setAttribute("id", "btn"+this.idx);

    this.timer.setAttribute("class", "timer-group-item");
    this.timer.setAttribute("id", "timer"+this.idx);
    this.timer.innerHTML = "00:00:00"

    this.li.appendChild(this.btn);
    this.li.appendChild(this.timer);
    list.appendChild(this.li);
  }
}
var items = [];
var numTest = 10

//__init__();

var item01 = cloneObject(item);


function __init__() {
  for(var i=0; i<1; i++) {
    items[i] = cloneObject(item);
    items[i].idx = i;
    items[i].init_item();
    console.log(items[i]);
    items[i].btn.addEventListener('click', function() {clickButton(items[i])});
  }
  console.log(items);
}

function clickButton(self) {
  if (self.onclick) {
    //1초 마다 반복
    timerStart = setInterval(function() {
      self.time++;
      hour = addZero(parseInt(self.time/3600));
      min = addZero(parseInt((self.time%3600)/60));
      sec = addZero(parseInt(self.time%60));
      self.timer.innerHTML = hour+":"+min+":"+sec;
    },1000);

    self.btn.style.background = "#B291EB";
    self.btn.innerHTML = "시작됨"
    self.onclick = false;
  } else {
    console.log("중지")
    if(timerStart) {
      //정지
      clearInterval(timerStart);
      self.btn.innerHTML = "정지됨"
      self.btn.style.background = "#ff6666";
      self.onclick = true;
    }
  }
}

function addZero(num) {
  return (num < 10 ? '0'+num : ''+num)
}

function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}
