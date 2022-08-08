// =====================作品集-輪播=========================//
var counter = 0;
var slide = document.getElementById("js_slide");
var items = slide.querySelectorAll('img'); //抓所有的img
var itemsCount = items.length;//總圖片數
var timer = 4000;
var interval = window.setInterval(showNext, timer);//循環設定
var slide_dot = slide.getElementsByClassName('js_slide_dot');//下面三個圈圈

var showCurrent = function(){
    var itemToShow = Math.abs(counter % itemsCount); 
    [].forEach.call( items, function(el){
        el.classList.remove('js_show'); // 將所有 img 的 class="show" 移除
    });
    items[itemToShow].classList.add('js_show'); //將要顯示的img加上"show"的class

    [].forEach.call( slide_dot, function(el){
        el.classList.remove('js_show'); // 將所有 img 的 class="show" 移除
    });
    slide_dot[itemToShow].classList.add('js_show'); //將要顯示的img加上"show"的class

};

function showNext(){
    counter++;
    showCurrent();
}

function showPrev(){
    counter--;
    showCurrent();
}

slide.addEventListener("mouseover", function(){
    interval = clearInterval(interval);
});

slide.addEventListener("mouseout", function(){
    interval = setInterval(showNext, timer);
});
// 設定選到誰
var prevBtn = document.getElementsByClassName("js_prev")[0];
var nextBtn = document.getElementsByClassName("js_next")[0];

prevBtn.addEventListener('click', showPrev, false);
nextBtn.addEventListener('click', showNext, false);


// =====================作品集-下滑區塊=========================//
document.addEventListener("click", function(e){
    if(e.target.classList.contains("js_slidedown")){
        let clicked_out = e.target.closest("ul.index_works_out");
        let clicked_out_openY = clicked_out.querySelector("li#index_works_open").offsetTop;
        // console.log(clicked_out_openY);
        clicked_out.style.transition = "all 1s ease-in-out";
        clicked_out.style.height = "810px";
        setTimeout(function(){
            window.scrollTo({
                top: clicked_out_openY - 125,
                behavior: 'smooth'
            });
        }, 700);
        e.target.style.webkitAnimationPlayState = "paused";
    }
    if(e.target.classList.contains("js_slideup")){
        // console.log(e.target);
        let clicked_out = e.target.closest("ul.index_works_out");
        let clicked_in = clicked_out.querySelector("a.js_slidedown");
        let clicked_out_openY = clicked_out.querySelector("li#index_works").offsetTop;
        // console.log(clicked_in);
        // console.log(clicked_out);
        clicked_out.style.transition = "all 1s ease-in-out";
        clicked_out.style.height = "365px";
        setTimeout(function(){
            window.scrollTo({
                top: clicked_out_openY - 125,
                behavior: 'smooth'
            });
        }, 700);
        clicked_in.style.webkitAnimationPlayState = "running";
    }
});

//一
// function slidedown(){
//     let slidedown = document.getElementsByClassName("index_works_out")[0];
//     slidedown.style.transition = "all 1s ease-in-out";
//     slidedown.style.height = "810px";
//     //把視線帶到open的那邊
// };

// function slideup(){
//     // let a_slidedown = document.getElementById("js_slidedown");
//     let slideup = document.getElementsByClassName("index_works_out")[0];
//     slideup.style.transition = "all 1s ease-in-out";
//     slideup.style.height = "365px";
//     //把視線拉回去
// };

//二
// function slidedown(){
//     let a_button = document.getElementsByClassName("js_slidedown");
//     // console.log(a_button);
//     for(let i = 0; i < 3; i++){
//         console.log("bbb");
//         let slidedown = document.getElementsByClassName("index_works_out")[i];
//         console.log(slidedown);
//         a_button[i].addEventListener("click", function(){
//             console.log("ccc");
//             slidedown.style.transition = "all 1s ease-in-out";
//             slidedown.style.height = "810px";
//             //把視線帶到open的那邊
//         });
//     }
// };

