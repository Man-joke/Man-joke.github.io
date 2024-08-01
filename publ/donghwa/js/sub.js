$(document).ready(function(){
// 서브
 // 왼쪽 사이드 네비부분
  $('.snb nav > ul > li > button').on('click', function(){
    $(this).addClass('on');
    $(this).parent().siblings().find('button').removeClass('on');
    $(this).next().slideToggle();
    // 다른 li button을 클릭했을 때 모든 ul 숨
    $(this).parent('li').siblings().find('ul').slideUp();
    // $(this).parent('li').siblings().children('ul').hide();
  });

  $('.snb nav > ul > li > ul > li > button').on('click', function(){
    $(this).addClass('on');
    $(this).parent('li').siblings().children('button').removeClass('on');
    $(this).parent('li').siblings().children('ul').slideUp(500);
    $(this).parent('li').next().stop().slideDown(500);
  });

  $('.snb nav > ul > li > ul > li > ul > li > a').on('click', function(){
    $(this).addClass('on');
    $(this).parent('li').siblings().children().removeClass('on');
  });


  // 질의응답 Q & A
  $('.question ul li button').on('click', function(){
    $(this).parent('li')  .children('p').stop().slideDown(500).addClass('on');
    $(this).parent('li').siblings().children('p').slideUp();
    // 탭 화살표
    $(this).parent('li').addClass('on');
    $(this).parent('li').siblings('li').removeClass('on');
  });

  //제품 상세히보기
  $('.high_image a:first-child').on('click', function(){
    $('.bg_black').fadeToggle(500);
    return false;
  });

  //서브4
  $('.event ul li').on('click',function(){
    var idx = $(this).index();
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
    $(this).parents('.visual').siblings('.high_image.sub4').children('div').eq(idx).addClass('on')
    $(this).parents('.visual').siblings('.high_image.sub4').children('div').eq(idx).siblings('div').removeClass('on')
  });

  // 팝업
  $('.popup li.add').on('click', function(){
    $(this).toggleClass('on');
    $('div.onclass').toggleClass('on');
    return false;
  });


  //상단으로 바로 올라가기
  function top(){
    $('.top').on('click', function(){
      $('html').animate({
        scrollTop:0
      }, 500);
    });
  }
  top();

});
