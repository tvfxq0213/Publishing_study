var agent = navigator.userAgent.toLowerCase();
var backgroundColor = ['#FFB3B3', '#FFDBA4', '#FFE9AE', '#C1EFFF', '#B1B2FF','#AAC4FF', '#F5F0BB', '#C4DFAA', '#90C8AC', '#73A9AD' , '#F3C5C5', '#FFB6B6','#DFBAF7','#ECFFC1'];


if( navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (agent.indexOf("msie") != -1)) {
  alert("이 스킨은 인터넷익스플로러를 지원하지 않습니다")
}

function openNav() {
  document.getElementById("mySidenav").classList.add("active");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("active");
}

function randomBackgroundBG(element){
	var num = Math.floor(Math.random() * backgroundColor.length); 
  $(element).css('background-color',backgroundColor[num]);
}

$(function(){
  var swiper = new Swiper(".mainBanner", {
   
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
})
