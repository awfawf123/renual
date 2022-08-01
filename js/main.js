new Swiper(".area-icon", {
    slidesPerView:4,
    spaceBetween: 50,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

  new Swiper(".gal-swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    pagination:{  
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gal-btn-next",
      prevEl: ".gal-btn-prev",
    },
  });
  let sw_banner = new Swiper(".sw-banner",{
    autoplay:{
      delay:2000,
      disableOnInteraction:false,
    },
    loop:true,
    slidesPerView:6,
    spaceBetween: 13,
    navigation:{
      nextEl:".banner-forward",
      prevEl:".banner-back",
    }
  });
new Swiper(".work-detail", {
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//notice
let nav_li = document.querySelectorAll('.notice-left ul li');
let news_li = document.querySelectorAll('.notice-right ul');
for(let i=0; i<nav_li.length; i++){
  nav_li[i].addEventListener('click',function(){
    for(let j=0; j<nav_li.length; j++){
      nav_li[j].classList.remove('nav-active');
      news_li[j].classList.remove('nav-active');
    }
    nav_li[i].classList.add('nav-active');
    news_li[i].classList.add('nav-active');
  });
  
};
//list
let list_li = document.querySelectorAll('.list ul li');
for(let i=0; i<list_li.length; i++){
  list_li[i].addEventListener('click',function(){
    for(let j=0; j<list_li.length; j++){
      list_li[j].classList.remove('list-active');
    }
    list_li[i].classList.add('list-active');
  })
};
//banner
let banner_play = document.querySelector('.banner-play');
let banner_back = document.querySelector('.banner-back');
let banner_forward = document.querySelector('.banner-forward');

banner_play.addEventListener('click',function(){
  banner_play.classList.toggle('banner-stop');
  let temp = banner_play.classList.contains('banner-stop');
  if(temp == true){
    sw_banner.autoplay.stop();
  }else{
    sw_banner.autoplay.start();
  }
});
banner_back.addEventListener('click',function(){
  let temp = banner_play.classList.contains('banner-stop');
  if(temp == true){
    banner_play.removeClass('banner-stop');
    sw_banner.autoplay.start();
  }
})
banner_forward.addEventListener('click',function(){
  let temp =banner_play.classList.contains('banner-stop');
  if(temp == true){
    banner_play.removeClass('banner-stop');
    sw_banner.autoplay.start();
  }
});
//go_top scroll btn
let go_top = document.querySelector('.gotop');
go_top.addEventListener("click",function(){
  window.scrollTo({top:0,behavior:'smooth'})
})
  