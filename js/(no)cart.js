var cart1_button = document.getElementById("cart1_button");

cart1_button.addEventListener("click", function(){
    let cart1_delive = document.querySelector("input[name=cart_delive]:checked");
    let cart1_address = document.getElementById("cart_delive_address").value;
    console.log(cart1_address);
    // if(cart1_delive === null){
    //     //要停留在本頁 表單的submit行為.preventDefault()(講義5-7)
    //     alert("請填寫配送方式");
    //     console.log("cart1_fail");
    // }else if(cart1_delive === "宅配"){
    //     console.log("cart1_home");
    //     if(cart1_address === ""){
    //         alert("請填寫地址");
    //     }  
    // }else(cart1_delive === "自取"){
    //     console.log("cart1_self");
    // }

    switch(cart1_delive){
        case null: 
            //要停留在本頁 表單的submit行為.preventDefault()(講義5-7)
            // alert("請填寫配送方式");
            // console.log("cart1_fail");
            break;
        case "宅配": 
            console.log("cart1_home");
            // if(cart1_address === ""){
            //     alert("請填寫地址");
            // }
            break;
        case "自取": 
            console.log("cart1_self");
            break;
    }
});



function cart1_address(){
    alert("請填寫地址");
}