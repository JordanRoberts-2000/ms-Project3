console.log("loaded js");
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
    /*{"background":"url(../shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(../shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(../shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(../shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(../shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(../shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(../shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_8.jpg)","tag1":"blue"},
    {"background":"url(shoes/sneaker_9.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_10.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_11.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_12.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_16.jpg)","tag1":"red"},
    {"background":"url(shoes/sneaker_13.jpg)","tag1":"red"}*/
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
    console.log("gg");
    for (var i = 0; i < info.length; i++){
      console.log("kk");
      var item = '<div style="background-image:'+info[i].background+'" class="item"><i class="far fa-comments"></i></div>'
      console.log(item);
      $(".main-grid").append(item);
      $(".item:nth-child(19n-15)").addClass("item-big");
      $(".item:nth-child(19n-11)").addClass("item-big");
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
  // new and improved/fixed loading
  $(window).on("load",function(){
      console.log("ho");
      gridDisplay();
      console.log("me");
    
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
      $("#header").css("transition","4s");
      $("#icons ul").css("flex-direction","row");
      $("#middle").css("height", "73vh");
      $("#icons").css("height", "10vh");
      screenAjust();
    }else if(scroll > 50){
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
      $("#header").css("transition",".3s");
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
    $("#header").css("transition","4s");
    $("#icons ul").css("flex-direction","row");
    $("#middle").css("height", "73vh");
    $("#icons").css("height", "10vh");
    screenAjust();
  });
  $("nav").on("mouseleave",function(){
    if(window.scrollY > 200){
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
      $("#header").css("transition",".3s");
      $("#icons ul").css("flex-direction","column-reverse");
      $("#middle").css("height", "43vh");
      $("#icons").css("height", "40vh");
      screenAjust();
    };
  });
  function screenAjust(){
  if ($(window).width() <= 684) {
      $("main").css("width", "100%");
    };
  };
  $(window).resize(function() {
    screenAjust();
    if ($(window).width() >= 684) {
      $("nav").css("width", "25%");
      $("main").css("width", "75%");
      $("#intro").css("opacity", "1");
      $("#intro").css("transition", "2.5s");
      $("#top input").css("opacity","1");
      $("#top input").css("transition","2.5s");
      $("#top input").css("flex","6");
      $("#search").css("flex","1");
      $("#header").css("opacity","1");
      $("#header").css("transition","4s");
      $("#icons ul").css("flex-direction","row");
      $("#middle").css("height", "73vh");
      $("#icons").css("height", "10vh");
    };
  });