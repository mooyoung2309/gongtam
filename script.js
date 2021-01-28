var button = document.getElementById('button');
var clear_button = document.getElementById('clear');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;
button.addEventListener('click', clickButton);
clear_button.addEventListener('click', clear);
function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='rename("+cnt+")'>수정</button>";
  list.appendChild(temp);
  cnt++;
}
function rename(cnt) {
  //window.alert(cnt);
  var li = document.getElementById('li'+cnt);
  var newText = prompt("무엇으로 수정하시겠습니까?")
  li.innerHTML = newText;
  li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='rename("+cnt+")'>수정</button>";
}
function remove(cnt) {
  //window.alert(cnt);
  var li = document.getElementById('li'+cnt);
  list.removeChild(li);
}
function clear(){
  var li = document.getElementById('li'+cnt);
  location.href="checkingpage.html?" + li;
}
