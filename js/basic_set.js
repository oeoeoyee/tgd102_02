// =====================導覽列-漢堡線=========================//
if(window.outerWidth < 1190){
    rwd_414();
    // header_414()
}

function rwd_414(){
    let burgerline = document.getElementsByClassName("nav_icon4")[1];
    let nav = document.getElementsByClassName("header_nav")[0];
    let xmark = document.getElementsByClassName("js_changeicon")[0]

    burgerline.addEventListener("click", function(){
        nav.style.display = "block";
        xmark.style.backgroundPosition = "-107px 0"; 
        xmark.classList.toggle("js_changeicon");
        if(xmark.classList.contains("js_changeicon")){
            xmark.style.backgroundPosition = "-87px 0";
            nav.style.display = "none";
        }
    });

    let product = document.getElementsByClassName("js_product")[0];
    let product_open= document.getElementsByClassName("js_product_ol")[0];

    product.addEventListener("click", function(){
        product_open.style.display = "block";
        product.classList.toggle("js_ol_open");
        if(product.classList.contains("js_ol_open")){
            product_open.style.display = "none";
        }
    });
}


// =====================導覽列-滾動視窗 導覽列收合=========================//
window.addEventListener("scroll", function(){
    let scroll_first = window.scrollY;

    window.addEventListener("scroll", function(){
        let scroll_second = window.scrollY;
        let header = document.getElementsByTagName("header")[0];

        if((scroll_first - scroll_second) < 0){
            header.classList.remove("-headdown");
            header.classList.add("-headup");
        }else{
            header.classList.remove("-headup");
            header.classList.add("-headdown");
        }

        scroll_first = scroll_second;
    });

});

// function header_414(){
    
// }

// =====================hover效果轉為直接點選(手機)=========================//
