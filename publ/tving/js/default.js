$(document).ready(function(){

  //메인 비쥬얼 슬라이드
  $('.visual .slide').bxSlider({
    auto: true,
    pager: true,
    pause: 4000,
  });

  //메인요소 각 채널 슬라이드
  $('.slide').bxSlider({
  });

  //메인요소 각 버튼
  $('.ch_live a').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    return false;
  });

  //패밀리 사이트
  $('footer .top .right .select button').on('click', function(){
    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().slideDown();
  });

});
