$(window).ready(function(){
  //메인 비쥬얼 슬라이드
  $('.visual > div > .slide').bxSlider({
    auto: true,
    pager: true,
    pause: 4500,
  });

  //메인 슬라이드
  $('.border_1 .slide').bxSlider({

  })

  //메인4 인기 VOD 탭메뉴
  $('.tab_list li').on('click', function(){
    var idx = $(this).index();
    console.log(idx);
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
    $(this).parent().siblings('div.ch_list').children().eq(idx).addClass('on')
    $(this).parent().siblings().children().eq(idx).siblings().removeClass('on')
    return false;
  });
});
