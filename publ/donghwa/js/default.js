$(document).ready(function(){
  //인덱스 탭 메뉴부분
  $('.find_product nav ul li').on('click',function(){
    var idx = $(this).index();
    $(this).addClass('on');
    $(this).siblings().removeClass('on')
    $(this).parents('nav').siblings('div.products').children('div').eq(idx).addClass('on')
    $(this).parents('nav').siblings('div.products').children('div').eq(idx).siblings().removeClass('on')
  });

  //인테리어 스타일 보실래요 슬라이드 부분
  $('.style nav ul li').on('click',function(){
    var idx = $(this).index();
      console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $(this).parents('div.m0auto').siblings('div.find_interior').find('ul.slider').eq(idx).addClass('on');
    $(this).parents('div.m0auto').siblings('div.find_interior').find('ul.slider')
    .eq(idx).parents('div.bx-wrapper').siblings().find('ul').removeClass('on');
  });

  //스크롤되면 위치값에 맞게 애니메이션 실행
  function scroll_header(){
    $(window).on('scroll', function(){
      var scr = $(this).scrollTop();
      var section1 = $('.find_product');
      var section2 = $('.style');
      var section3 = $('.snsORblog');
      var offset1 = section1.offset().top-700;
      var offset2 = section2.offset().top-800;
      var offset3 = section3.offset().top-600;
      console.log(offset2);
      if(scr > offset1 && scr < offset2){
        $('.find_product').addClass('on');
      }else if( scr > offset2 && scr < offset3){
        $('.style').addClass('on');
      }else if( scr > offset3){
        $('.snsORblog').addClass('on');
      }
    });
  }
  scroll_header();

  // 패밀리사이트 화살표
$('.bottom .family_site .family').on('click', function(){
  $(this).toggleClass('on');
  });

  // index 인테리어 슬라이드
  $('.find_interior .slider').bxSlider({
    minSlides : 3,
    maxSlides : 3,
    slideWidth : 620,
    useCSS:false,
    moveSlides:1,
  });
});
