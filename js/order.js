// const choose_kind = document.getElementsByClassName("js_choose_kind");

// for(let i = 0; i < choose_kind.length; i++){
//     choose_kind[i].addEventListener("click", listener);
// }

// function listener(e) {
//     const curEle = e.target;
//     // if (curEle instanceof HTMLHeadingElement) {
//     //     return;
//     // }
//     curEle.classList.add("js_choosed");
//     for(let i = 0; i < choose_kind.length; i++){
//         const choosed = choose_kind[i]
//         if (curEle === choosed) {
//             continue;
//         }
//         choosed.classList.remove("js_choosed");
//     }
// }

//==========================選擇商品種類=====================//
//選擇商品種類-監聽按鈕
const kind = document.getElementsByClassName("js_choose_kind");
for(let i = 0; i < kind.length; i++){
    kind[i].addEventListener("click", choosed_kind);
}
//選擇商品種類-選到的加class
function choosed_kind(e){
    for(let i = 0; i < kind.length; i++){
        kind[i].classList.remove("js_choosed");
    }
    e.target.classList.add("js_choosed");
}


//==========================選擇花材=====================//
const choose_pic = document.getElementsByClassName("order_choose_pic")[0].querySelectorAll("div");

for(let i = 0; i < choose_pic.length; i++){
    // let count = 0;
    // const result_del_word = e.target.closest("div").querySelector("h6").innerText;
    choose_pic[i].addEventListener("click", function(e){
        //選擇花材-生出數字(上限十)
        // const count = e.target.closest("div").querySelector("div");
        // console.log(count);
        // count.classList.add("choose_count");
        // let count_num = count.innerText;
        // count_num = count_num + 1;

        // count = count + 1;
        // let count = ;
        // innerText
        // console.log(e.target);
        // e.target.insertAdjacentHTML("beforebegin", pic_count);
        //加上上限十

        // 數量上限十
        // result_count = 目前已選擇的花材數量
        const result_count = document.getElementsByClassName("order_choose_result")[0].querySelectorAll("div").length;
        if(result_count >= 10){
            alert("超過花材數量上限！");
        }else{
            choose();
        }

        //選擇花材-結果處生出按鈕
        function choose(){
            let choose_result = document.getElementsByClassName("order_choose_result")[0];
            let result_tag_word = e.target.parentElement.querySelector("p").innerText;
            let result_tag = `<div>
                                <p>${result_tag_word}</p>
                                <a><i class="fa-regular fa-circle-xmark js_choose_result_del"></i></a>
                            </div>`
            choose_result.insertAdjacentHTML("beforeend", result_tag);

            //移除花材
            let result_del = document.getElementsByClassName("js_choose_result_del");
            for(let i = 0; i < result_del.length; i++){
                result_del[i].addEventListener("click", function(){
                    this.closest("div").remove();
                });
            }
<<<<<<< HEAD

=======
>>>>>>> fa5c60477a6a82f772478f9c8a5ea25d364052f7
        }
    });
}


//移除花材
// const choose_result = document.getElementsByClassName("order_choose_result")[0];
// choose_result.addEventListener("click", function(e){
<<<<<<< HEAD
    // const result_del = document.getElementsByClassName("js_choose_result_del");
    // for(let i = 0; i < result_del.length; i++){
    //     result_del[i].addEventListener("click", function(){
    //         this.closest("div").remove();
    //     });
    // }
=======
//     const result_del = document.getElementsByClassName("js_choose_result_del");
//     for(let i = 0; i < result_del.length; i++){
//         result_del[i].addEventListener("click", function(){
//             this.closest("div").remove();
//         });
//     }
>>>>>>> fa5c60477a6a82f772478f9c8a5ea25d364052f7
    
//     //result_del_word = 按鈕裡的字(哪種花)
//     // const result_del_word = e.target.closest("div").querySelector("p").innerText;
//     //result_tag_pic = 圖片區的花材名稱(陣列)
//     // const result_tag_pic = choose_result.previousElementSibling.querySelectorAll("p");
//     // for(let i = 0; i < result_tag_pic.length; i++){
//     //     if(result_tag_pic[i].innerText === result_del_word){
//     //         console.log(result_tag_pic[i].innerText);
            
//     //     }else{}
//     // }

//     // let pic_count = `<div>${count}</div>`;
//     // choose_pic.querySelector("span").insertAdjacentHTML("beforebegin", pic_count)
        
// });//bug: 要多按一下才會動


