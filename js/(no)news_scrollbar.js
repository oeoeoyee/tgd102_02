// 來自niko and...的參考資料

//loves
function loves_init() {
    var loves_setting = {
      loop: true,
      centeredSlides: true,
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.home-loves-swiper-next',
        prevEl: '.home-loves-swiper-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    };
    var loves_slider01 = new Swiper(".js-home-loves-slider",loves_setting);
  }
  loves_init();

//PC用カスタムスクロールバー
function loves_scrollbar_init(){
    //スクロールバー初期化
    var $container = $(".home-loves-card-wrap");
    var $scrollbar = $(".js-home-loves-scrollbar");
    var $scrollbar_current = $(".js-home-loves-scrollbar > .current");
    function scrollbar_map() {
      var container_h = $container.outerHeight(),
      scroll_h = $container.get(0).scrollHeight,
      bar_h = $scrollbar.height(),
      current_h = $scrollbar_current.height(),
      scroll_pos = $container.scrollTop(),
      progress = scroll_pos/(scroll_h - container_h);
      $scrollbar_current.css("top", (bar_h - current_h) * progress);
    }
    $container.on("scroll",function(){
      scrollbar_map();
    });
    scrollbar_map();
  }
  loves_scrollbar_init();