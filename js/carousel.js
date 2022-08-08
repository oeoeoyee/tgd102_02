var counter = 0; //看著寫的
var slide = document.getElementById("slide");
var items = slide.querySelectorAll('img'); //抓所有的img
var itemsCount = items.length;
var interval = window.setInterval(showNext, 3000);

var showCurrent = function(){
    var itemToShow = Math.abs(counter % itemsCount); 
    [].forEach.call( items, function(el){
        el.classList.remove('show'); // 將所有 img 的 class="show" 移除
    });
    items[itemToShow].classList.add('show'); //將要顯示的img加上"show"的class
};

function showNext(){
    counter++;
    showCurrent();
}

function showPrev(){
    counter--;
    showCurrent();
}
