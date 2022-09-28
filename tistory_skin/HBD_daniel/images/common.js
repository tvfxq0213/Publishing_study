var agent = navigator.userAgent.toLowerCase();

if( navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (agent.indexOf("msie") != -1)) {
  alert("이 스킨은 인터넷익스플로러를 지원하지 않습니다")
}

function openNav() {
  document.getElementById("mySidenav").classList.add("active");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("active");
}

$(function(){
  var swiper = new Swiper(".mainBanner", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
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
