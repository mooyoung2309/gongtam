var button = document.getElementsByClassName('goal_btn');
var text = document.getElementsByClassName('goal_txt')
var temp_btn = document.getElementById('button')

button.addEventListener('click', clickButton);
temp_btn.addEventListener('click', clickButton);
function clickButton() {
  var color = ["#FC5C&D", "#6A82FB", "38ef7d"]
  var num = Math.floor(Math.random() * color.length);
  button.backgroundColor = color[num];
  alert("등록되었습니다")
}
