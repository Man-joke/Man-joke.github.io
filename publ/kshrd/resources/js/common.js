$(function() {
  //header
  var header = $("header");
  var dep1 = header.find('.gnb > li >a')
  var winW = $(window).width();

  $(window).on('load scroll', function() {
    topPos = $(this).scrollTop();
    if (topPos > 0) {
      header.addClass("top")
      $("body").addClass('w');
    } else {
      header.removeClass("top")
      $("body").removeClass('w');
    }
    var scrollTop = $(window).scrollTop();
    var conH = $('.sub_visual').outerHeight();
    var headerH = $('#header').outerHeight();

    if (scrollTop > (conH - headerH)) {
      $(".lnb").addClass("subOn");
      header.addClass('absOn');
    } else {
      $(".lnb").removeClass("subOn");
      header.removeClass('absOn');
    }
  });

  dep1.on('mouseover focusin', function() {
    header.addClass('over');
    $('.dim').fadeIn();
  });
  header.on('mouseleave', function() {
    header.removeClass('over');
    $('.dim').fadeOut();
  });

  //tooltip
  $('.utill > ul > li > a').on('mouseenter', function() {
    $(this).addClass('tooltip');
  });
  $('.utill > ul > li > a').on('mouseleave', function() {
    $(this).removeClass('tooltip');
  });

  //sitemap
  $('.btn_sitemap').click(function() {
    $(this).addClass('chk');
    $('#sitemap_cont').fadeIn();
    $('#sitemap_cont').find('.sm_dep').eq(0).find('.sm_dep_m').focus();
    return false;
  });
  $('.btn_sitemap_cl').click(function() {
    $('#sitemap_cont').fadeOut();
    $('.btn_sitemap.chk').focus();
    $('.btn_sitemap').removeClass('chk');
    return false;
  });
  $('.btn_sitemap_cl').keydown(function(event) {
    if (event.keyCode == 9) {
      $('#sitemap_cont').find('.sm_dep').eq(0).find('.sm_dep_m').focus();
      return false;
    }
  });
  $('#sitemap_cont .sm_dep:first-child .sm_dep_m').keydown(function(event) {
    var isShift = window.event.shiftKey ? true : false;
    if (isShift && (e.keyCode == 9)) {
      $('.btn_sitemap_cl').focus();
      return false;
    }
  });

  // mobile gnb
  $('.mobile_menu').click(function() {
    anioption = {
      time: 0.8,
      easing: 'easeOutCubic'
    };
    // $('.dim').fadeIn();
    $('.gnb-m').animate({
      "right": "0%"
    }, anioption);
    $('body').addClass('on');

  });

  $('.btn_close, .dim').click(function() {
    anioption = {
      time: 0.6,
      easing: 'linear'
    };
    $('.gnb-m').animate({
      "right": "-100%"
    }, anioption);
    $('.dim').fadeOut();
    $('body').removeClass('on');

  });

  $(".mobile a").click(function() {
    //메뉴 선택
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      $('.mobile').removeClass('on');
      $(this).next(".deth_2").slideToggle(300).siblings(".deth_2").slideUp("slow");

      $(this).attr('title', '하위메뉴닫기');

    } else {
      $('.mobile').removeClass('on');
      $(this).parent().toggleClass('on');
      $(this).addClass('on').parent().siblings('li').find('> a').removeClass('on');

      if ($(this).next(".deth_2") && $(this).next(".deth_2").is(":hidden")) {
        $(this).next(".deth_2").slideToggle(300).siblings(".deth_2").slideDown("slow");
      }

      //선택한 메뉴를 제외하고 다른 메뉴의 하위 메뉴 닫기
      $(this).addClass('on').parent().siblings('li').find('> ul').each(function(index, target) {
        if ($(target).is(':visible')) {
          $(target).slideToggle(300).slideUp("slow");
        }
      });

      $(this).attr('title', '하위메뉴열기');
    }

  });

  //footer banner
  var ww = $(window).width();
  var footBanner = undefined;

  function initSwiper2() {

    if (ww < 901 && footBanner == undefined) {
      if ($('.ft_ban').length) {
        footBanner = new Swiper(".ft_ban", {
          slidesPerView: 'auto',
        });
        footBanner.init();
      }

    } else if (ww >= 901 && footBanner != undefined) {
      footBanner.destroy();
      footBanner = undefined;
    }
  }

  initSwiper2();

  $(window).on('resize', function() {
    ww = $(window).width();
    initSwiper2();
  });

  $.fn.popOpen = function() {
    $(this).click(function(e) {
      var s = $(this).attr("href");
      $(s).popup('show');
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    });
    return this;
  };
  $('.btn_pop').popOpen();

  //lnb
  $('.nav_list').on('mouseover focusin', function() {
    var locW = $(window).width();
    var locWs = 899;
    if (locW > locWs) {
      $('.nav_list .list').stop().slideUp(300);
      $(this).find('.list').stop().slideDown(300);
      $(this).addClass('on');
    }

  });
  $('.nav_list').mouseout(function() {
    var locW = $(window).width();
    var locWs = 899;
    if (locW > locWs) {
      $('.nav_list .list').stop().slideUp(300);
      $(this).removeClass('on');
    }
  })
  $('.nav_list .list li a').last().focusout(function() {
    $('.nav_list .list').stop().slideUp(300);
    $(this).removeClass('on');

  });

  $('.nav_list').click(function() {
    var locW = $(window).width();
    var locWs = 900;
    if (locW <= locWs) {
      $(this).find('.list').slideToggle(200);
      $(this).siblings().find($('.list')).slideUp(100);
      $(this).toggleClass('on');
      $(this).siblings().removeClass('on');
    }
  });

  // 찾아오는길 슬라이드 영역

  var eduSwiper03 = new Swiper(".frontview__view", {
    slidesPerView: 3,
    loop: true,
		spaceBetween: 30,
    navigation: {
      nextEl: '.frontview__view .swiper-button-next',
      prevEl: '.frontview__view .swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      formatFractionCurrent: function(number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function(number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '/' +
          '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      750: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
				spaceBetween: 30,
      },
      1000: {
        slidesPerView: 2,
				spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
				spaceBetween: 40,
      },
    },

  });


  // 서브페이지
  // 말줄임표
  var wordlength = 32;
  
  function ellse(wordlength){
    $(".notice-h3").each(function(){
      length = wordlength; //표시할 글자수 정하기
      console.log(length);
      $(this).each(function(){
        if( $(this).text().length >= length ){
          $(this).text( $(this).text().substr(0,length)+' ...')  //지정할 글자수 이후 표시할 텍스트
          if($(this).text().indexOf('...') != -1){
            $(this).text( $(this).text().substr(0,length)+' ...').append(" <i class='new'>")  // 말줄임표 있을경우 i태그 추가
          }
        }
      });
    });
  }
  ellse(wordlength)
  
  $(window).resize(function(){
    if($(window).width() < 375){
      wordlength = 20;
      ellse(wordlength)
    }
  })


  // 회원가입시 소속 선택
  $('#inputOrganization').focus(function(){
    $('.organization__selectList').show();
  })

  $('#inputOrganization').focusout(function(){
    $('.organization__selectList').hide();
  })
  // 회원가입시 소속 선택'

  // 약관동의
    // 전체 클릭
  $(".clause").find("#inputAllAgree").on("click", function () {
    if ($(this).is(":checked")) {
      $(".input-group").find(".inputCheck").prop("checked", true);
    } else {
      $(".input-group").find(".inputCheck").prop("checked", false);
    }
  });

  // 전체 동의 1개라도 안됐을시 모두동의 체크박스 풀림
  $(".clause").find(".inputCheck").on("click", function () {
    var checked = $(this).is(":checked")
    if (!checked) {
      $("#inputAllAgree").prop("checked", false);
    } else {
      $("#inputAllAgree").prop("checked", true);
    }
  });





});




