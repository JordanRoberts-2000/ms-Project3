var view = 0;
$(".sign-up-container").fadeOut();
$(".popup-container").fadeOut();
$(".artist-grid").fadeOut();
//bounce
window.setInterval(function(){
  console.log("e")
  $("#icons li").css("font-size", "2em");
  setTimeout(function(){
      $("#icons li").css("font-size", "1.6em");
    }, 500);
}, 8000);
//auto scroll down on refresh fix
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
function gridDisplay(){
  $(".load").fadeOut("slow");
  $(".item").css("opacity", "1");
  $(".item").css("transform", "scale(1)");
};
//display main grid
var mainGridArray = [
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(static/shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(static/shoes/sneaker_12.jpg)","tag1":"red"}
  ]
  function filterGrid(userInput, info){
    var filterArray = [];
    for (var i = 0; i < info.length; i++){
      var userInput = userInput.toLowerCase();
      var tag = info[i].tag1.toLowerCase();
      if (tag.includes(userInput)){
        filterArray.push(info[i]);
      };
    };
    return filterArray;
  };
  function buildGrid(info){
    $(".main-grid").html("");
    for (var i = 0; i < info.length; i++){
      var item = '<div style="background-image:'+info[i].background+'" class="item"><i class="far fa-comments"></i></div>'
      $(".main-grid").append(item);
      if(view == 0){/*fix*/
        $(".item:nth-child(19n-15)").addClass("item-big");
        $(".item:nth-child(19n-11)").addClass("item-big");
      };
    };
  };
  buildGrid(mainGridArray);
  $("#top input").on("keyup", function(){
    var userInput = $(this).val();
    var info = filterGrid(userInput, mainGridArray);
    buildGrid(info);
    gridDisplay();
    for (let i = 0; i < 1000; i++) {
    gridHoverOn(i);
  }
  });
  $(".item").click(function(){
    text = $(this).attr("style");
    $(".popup-container").fadeIn(800);
    $(".popup-side1").html("<div style='"+text+"' class='popup-image' div></div>")
    $(".popup i").click(function(){
      $(".popup-container").fadeOut(800);
    });
  });
  $(".fa-palette").click(function(){
    if($('.artist-grid:visible').length){
      $(".artist-grid").fadeOut();
      $(".fa-palette").css("pointer-events", "none")//bug fix worth mention
      setTimeout(function(){
        $(".a-item").css("opacity", "0");
        $(".a-item").css("transform", "scale(0.7)");
        $(".fa-palette").css("pointer-events", "auto")
      }, 1000);
    }else{
      $(".artist-grid").fadeIn();
      $(".a-item").css("opacity", "1");
      $(".a-item").css("transform", "scale(1)");
    };
  });
  $(".fa-users").click(function(){
    $(".sign-up-container").fadeIn();
  });
  $(".sign-up i").click(function(){
    $(".sign-up-container").fadeOut();
  });
  // clickable view
  /*window.addEventListener('resize', function() {
    if (($(window).width() <= 1200)){
      sview = 0 
      $(".main-grid").css("grid-template-columns", "repeat(3, 1fr)");
    }else if(($(window).width() <= 700)){
      sview = 0 
      $(".main-grid").css("grid-template-columns", "repeat(2, 1fr)");
    };
  });*/
  $(".fa-eye").click(function(){
    
      if(view == 0){
          $(".main-grid").css("grid-template-columns", "repeat(4, 1fr)");
          $(".item").removeClass("item-big");
          view = 1;
        }else if(view == 1){
          $(".main-grid").css("grid-template-columns", "repeat(3, 1fr)");
          view = 2;
        }else if(view == 2){
          $(".main-grid").css("grid-template-columns", "repeat(2, 1fr)");
          view = 3;
        }else if(view == 3){
          $(".main-grid").css("grid-template-columns", "repeat(1, 1fr)");
          view = 4;
        }else if(view == 4){
          if($(window).width() <= 1200){
            $(".main-grid").css("grid-template-columns", "repeat(4, 1fr)");
            view = 1;
          }else{
            $(".main-grid").css("grid-template-columns", "repeat(8, 1fr)");
            view = 5;
          };
        }else if(view == 5){
          if($(window).width() <= 1200){
            $(".main-grid").css("grid-template-columns", "repeat(4, 1fr)");
            view = 1;
          }else{
            $(".main-grid").css("grid-template-columns", "repeat(5, 1fr)");
            $(".item:nth-child(19n-15)").addClass("item-big");
            $(".item:nth-child(19n-11)").addClass("item-big");
            view = 0;
          }; 
        };
  });
  function mobileAdjust(){
    if($(window).width() <= 683){/*bugfix*/
      $(".mobile-icons").fadeIn();
    }else{
      $(".mobile-icons").fadeOut();
    };
  };
  mobileAdjust();
  window.addEventListener('resize', function() {
    console.log($(window).width());
    mobileAdjust();
  });
  // new and improved/fixed loading
  $(window).on("load",function(){
    $("#videoBackground").html('<source src="static/navvid.mp4" type="video/mp4">')
    document.getElementById("videoBackground").addEventListener('loadeddata', (e) => {
      gridDisplay();
    });
  });
  function gridHoverOn(a){
    $(".item:nth-child("+a+")").on("mouseover",function(){
      $(".item:nth-child("+a+")").css("transition-delay", "0");
      $(".item:nth-child("+a+")").css("transition", "2s");
      $(".item:nth-child("+a+")").css("background-size", "110% 110%");
      $(".item:nth-child("+a+")").css("z-index", "0");
      $(".item:nth-child("+a+") i").css("opacity", "1");
      $(".item:nth-child("+a+")").on("mouseleave",function(){
        $(".item:nth-child("+a+")").css("background-size", "100% 100%");
        $(".item:nth-child("+a+")").css("z-index", "1");
        $(".item:nth-child("+a+") i").css("opacity", "0");
      });
    });
  };
  //hover 
  for (let i = 0; i < 1000; i++) {
    gridHoverOn(i);
  }
  //scroll
  window.addEventListener("scroll", () => {
    var scroll = window.scrollY;
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    console.log(scroll);
    console.log(scrollable);
    if (scroll < 50){
      $("nav").css("width", "25%");
      $("main").css("width", "75%");
      $("#intro").css("opacity", "1");
      $("#intro").css("transition", "2.5s");
      $("#top input").css("opacity","1");
      $("#top input").css("transition","2.5s");
      $("#top input").css("flex","6");
      $("#search").css("flex","1");
      $("#header").css("opacity","1");
      $("#icons ul").css("flex-direction","row");
      $("#middle").css("height", "73vh");
      $("#icons").css("height", "10vh");
      screenAjust();
    }else if(scroll > 50 && $(window).width() > 684){
      if(scroll == scrollable){
      }else{
      $("nav").css("width", "5%");
      $("main").css("width", "95%");
      $("#intro").css("opacity", "0");
      $("#intro").css("transition", ".3s");
      $("#top input").css("opacity","0");
      $("#top input").css("transition",".3s");
      $("#top input").css("flex","1");
      $("#search").css("flex","99");
      $("#header").css("opacity","0");
      $("#icons ul").css("flex-direction","column-reverse");
      $("#middle").css("height", "43vh");
      $("#icons").css("height", "40vh");
      screenAjust();
      };
    };
  });
  //
  $("#top").on("mouseover",function(){
    console.log("up");
    $("nav").css("width", "25%");
    $("main").css("width", "75%");
    $("#intro").css("opacity", "1");
    $("#intro").css("transition", "2.5s");
    $("#top input").css("opacity","1");
    $("#top input").css("transition","2.5s");
    $("#top input").css("flex","6");
    $("#search").css("flex","1");
    $("#header").css("opacity","1");
    $("#icons ul").css("flex-direction","row");
    $("#middle").css("height", "73vh");
    $("#icons").css("height", "10vh");
    screenAjust();
  });
  $("nav").on("mouseleave",function(){
    if(window.scrollY > 200 && $(window).width() > 684){
      console.log("down");
      $("nav").css("width", "5%");
      $("main").css("width", "95%");
      $("#intro").css("opacity", "0");
      $("#intro").css("transition", ".3s");
      $("#top input").css("opacity","0");
      $("#top input").css("transition",".3s");
      $("#top input").css("flex","1");
      $("#search").css("flex","99");
      $("#header").css("opacity","0");
      $("#icons ul").css("flex-direction","column-reverse");
      $("#middle").css("height", "43vh");
      $("#icons").css("height", "40vh");
      screenAjust();
    };
  });
  function screenAjust(){
  if ($(window).width() <= 684) {
      $("main").css("width", "100%");
      $("nav").css("width", "100%");
      $("#top input").css("opacity","1");
      $("#top input").css("transition","2.5s");
      $("#top input").css("flex","6");
      $("#search").css("flex","1");
      $("#header").css("opacity","1");
    };
  };
  $(window).resize(function() {
    screenAjust();
    if ($(window).width() > 684) {
      $("nav").css("width", "25%");
      $("main").css("width", "75%");
      $("#intro").css("opacity", "1");
      $("#intro").css("transition", "2.5s");
      $("#top input").css("opacity","1");
      $("#top input").css("transition","2.5s");
      $("#top input").css("flex","6");
      $("#search").css("flex","1");
      $("#header").css("opacity","1");
      $("#icons ul").css("flex-direction","row");
      $("#middle").css("height", "73vh");
      $("#icons").css("height", "10vh");
    }
  });