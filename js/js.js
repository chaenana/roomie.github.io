//console.log("load")

let number = document.getElementById('num');

let start = 0;
let end = 29;
let ticks = 7;
let speed = 100;

let randomNumbers = [end]

for (let i = 0; i < ticks - 1; i++) {
  randomNumbers.unshift(
    Math.floor(Math.random() * (end - start + 1) + start)
  );
}

randomNumbers.sort((a, b) => {return a - b});

console.log(randomNumbers.length)

let x = 0;
let interval = setInterval(function () {
  
   number.innerHTML = randomNumbers.shift();

   if (++x === ticks) {
      window.clearInterval(interval);
   }

}, speed);

// 셰어하우스 성장률




let number_1 = document.getElementById('num_1');

let start_1 = 0;
let end_1 = 561;
let ticks_1 = 7;
let speed_1 = 50;

let randomNumbers_1= [end_1]

for (let i = 0; i < ticks_1 - 1; i++) {
  randomNumbers_1.unshift(
    Math.floor(Math.random() * (end_1 - start_1 + 1) + start_1)
  );
}

randomNumbers_1.sort((a, b) => {return a - b});

console.log(randomNumbers_1.length)

let y = 0;
let interval_1 = setInterval(function () {
  
   number_1.innerHTML = randomNumbers_1.shift();

   if (++y === ticks_1) {
      window.clearInterval(interval_1);
   }

}, speed);


//~만


let number_2 = document.getElementById('num_2');

let start_2 = 0;
let end_2 = 8677;
let ticks_2 = 7;
let speed_2 = 100;

let randomNumbers_2 = [end_2]

for (let i = 0; i < ticks_2 - 1; i++) {
  randomNumbers_2.unshift(
    Math.floor(Math.random() * (end_2 - start_2 + 1) + start_2)
  );
}

randomNumbers_2.sort((a, b) => {return a - b});

console.log(randomNumbers_2.length)

let z = 0;
let interval_2 = setInterval(function () {
  
   number_2.innerHTML = randomNumbers_2.shift();

   if (++z === ticks_2) {
      window.clearInterval(interval_2);
   }

}, speed);

//가구




console.log("load");

/*

gallery

view
view-container
view-item

list
li
a

*/




var $gallery = document.querySelector('#main .section:nth-child(4) #gallery');

var $view = $gallery.querySelector("#main .section:nth-child(4) .view");
var $viewContainer = $view.querySelector("#main .section:nth-child(4) .view-container");
var $viewItem = $viewContainer.querySelectorAll("#main .section:nth-child(4) .view-item");

var $list = $gallery.querySelector("#main .section:nth-child(4) .list");
var $listItem = $list.querySelector("#main .section:nth-child(4) li"); //-> list.
var _$a = [];

var _vWidth = 800;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

$viewContainer.style.width = (_vWidth * _max) + 'px';
for(var i = 0; i < _max; i++){
    $viewItem[i].style.width = _vWidth + 'px';
    //$listItem[i]
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("mouseover", onClickListItemEl);
    //console.log($a);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    //indexOf 는 현재 자기가 몇번째 해당되는지
    // if(_cuid!== id){
    //     console.log(">>>");
    //     $listItem[_cuid].classList.remove("selected");
    //     _cuid = id;
    // } 

    var $listItemParent = e.currentTarget.parentElement;
    //현재 클릭된 요소(a)의 부모를 찾는다.
    if(!$listItemParent.classList.contains('selected')){
    //부모 요소(li)가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 (false)
    _cuId = id;
    //현재 클릭된 버튼의 번호를 변경
    $listItem[_exId].classList.remove("selected");
    //이전에 활성화 된 버튼의 클래스(selected)를 삭제
    $listItem[_cuId].classList.add("selected");
    //현재 버튼의 클래스(selected)가 활성화되도록 추가
    var left = _vWidth * _cuId * -1;


    anime({
        targets : $viewContainer,
        left : left,
        duration : 1000,
        easing : "easeInOutQuad"

    })

    }

}