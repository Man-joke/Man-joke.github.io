$mainIdx = 0;
$(document).ready(function () {
	var header = $("header");
	var dotMenu = $(".dotMenu");
	var btnApply = $(".btn_apply")
	var topBtn = $('.top_btn')
	var mainItem = $('#mainCon').children();
	var mainItemLen = mainItem.length;
	var body = $('body')
	$('#mainCon').fullpage({
		licenseKey: '592662CD-C3924E59-B1F31248-8FA35711',
		scrollingSpeed: 800,
		css3: true,
		lockAnchors: true,
		anchors: ['part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7'],
		menu: '#menu',
		'onLeave': function (index, nextIndex, direction) {
			$mainIdx = nextIndex;
			//console.log(nextIndex);
			if (nextIndex == 1) {
				header.removeClass("on");
			}
			setTimeout(function () {
				$(".section" + index).addClass("on");
			}, 800)
			//console.log("nextIndex = " + nextIndex);

			dotMenu.find("li").removeClass("on")
			dotMenu.find("li").eq(nextIndex - 1).addClass("on")

			if (index == 7 && direction == 'down'){
				dotMenu.css('opacity', '0');
				btnApply.css('opacity', '0');

				var footHeight = $('#footer').outerHeight() + 60;
				topBtn.css('bottom', footHeight);
				topBtn.removeClass('h');

			} else if (direction == 'up'){
				dotMenu.css('opacity', '1');
				btnApply.css('opacity', '1');
				topBtn.addClass('h');
			}
			if (nextIndex == 1) {
				topBtn.removeClass("on");
				btnApply.removeClass('rht');
			} else {
				topBtn.addClass("on");
				btnApply.addClass('rht');
			}
			if (nextIndex == 2 || nextIndex == 6) {
				body.addClass('w');
				dotMenu.addClass("on");

			} else {
				body.removeClass('w');
				dotMenu.removeClass("on");
			}


		}
	});


	$(document).on('click', '.dotMenu li a', function (e) {
		e.preventDefault();
		var idx = $(this).parent().index() + 1;
		$.fn.fullpage.moveTo('part' + idx, idx);
	});

});

$(function () {
	//main slider
	var mainSwiper = new Swiper(".main_visual", {
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		//speed: 3000,
		effect : 'fade',
		fadeEffect: {
			crossFade: true
		  },
		loop: false,
		autoplay: {
			disableOnInteraction: false,
			delay: 6000,
		},
		pagination: {
			el: ".main_visual .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		},
	});
	$(" .main_visual .visual_content .swiper-pagination .swiper-pagination-bullet").eq(0).addClass("autoPlay");

	var dummyLen = 2;
	var mainLastPage = mainSwiper.slides.length - dummyLen;

	mainSwiper.on("slideChangeTransitionStart", function () {
		var activeIdx = mainSwiper.activeIndex - 1;
		var curIdx = activeIdx % mainLastPage;
		var $Elm = $(".main_visual .ico_movie .ico.play");
		var $bulletElm = $(".main_visual .visual_content .swiper-pagination .swiper-pagination-bullet");
		var $bulletActiveElm = $(" .main_visual .visual_content .swiper-pagination .swiper-pagination-bullet-active");

		$bulletElm.removeClass("autoPlay");
		if (!$Elm.hasClass("pause")) {
			$bulletActiveElm.removeClass("autoPlay");
		} else {
			$bulletActiveElm.addClass("autoPlay");
		}

	});

	//slide play, pause
	$(document).on("click", ".main_visual .ico_movie", function () {
		var $iconElm = $(this).find("i");
		if (!$iconElm.hasClass("pause")) {
			mainSwiper.autoplay.start();
			$iconElm.addClass("pause");
			$(".main_visual .swiper-pagination-bullet-active").addClass("autoPlay");
		} else {
			mainSwiper.autoplay.stop();
			$iconElm.removeClass("pause");
			$(".main_visual .swiper-pagination-bullet-active").removeClass("autoPlay");
		}
	});
	//IMG를 Backgrond 이미지로 변환
	$('.slide_backImg').imgLiquid({
		fill: true,
		horizontalAlign: "top",
		verticalAlign: "center"
	});


});


$(function() {
	//기관
    $("#scroller01").simplyScroll({
		speed: 1,
		pauseOnHover: false
	});
	$("#scroller02").simplyScroll({
		speed: 1,
		pauseOnHover: false
	});
	$("#scroller03").simplyScroll({
		speed: 1,
		pauseOnHover: false
	});

	//교육
	//모바일상단슬라이드
	var eduSwiper01 = new Swiper(".edu_step_slider", {
		slidesPerView: 3,
		spaceBetween: 15,
		navigation: {
			nextEl: '.edu_step_slider .swiper-button-next',
			prevEl: '.edu_step_slider .swiper-button-prev',
		},
	});
	// 하단슬라이드
 	var eduSwiper02 = new Swiper(".edu_list", {
		slidesPerView: 3,
		//spaceBetween: -35,
		navigation: {
			nextEl: '.edu_wrap .swiper-button-next',
			prevEl: '.edu_wrap .swiper-button-prev',
		},
		pagination: {
			el: ".edu_list .swiper-pagination",
			type: "fraction",
			formatFractionCurrent: function (number) {
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					   '/' +
					   '<span class="' + totalClass + '"></span>';
			}
		  },
		breakpoints: {
			900: {
				slidesPerView: 'auto',
			},
		},

	});

	var pagingSwiper = new Swiper(".edu_list", {
		slidesPerView: 3,
		pagination: {
		  el: ".swiper-pagination2",
		  type: "progressbar",
		},
		breakpoints: {
			900: {
				slidesPerView: 'auto',
				spaceBetween: -15,
			},
			1200: {
				spaceBetween: -40,
			},
			1800: {
				spaceBetween: -25,
			},
		},
	  });

	  eduSwiper02.controller.control = pagingSwiper;


	//현황
	//탭
	$('.st_tab li').click(show)
    function show(){
		var index = $(this).index()
        $('.st_tab li a').removeClass('on')
        $(this).find('a').addClass('on')
        var index = $(this).index()
        $('.status_slider').hide()
        $('.status_slider').eq(index).fadeIn()
    } $('.st_tab li').eq(0).trigger('click')

	//슬라이드
	var statusSwiper01 = new Swiper("#st01 .pc_slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '#st01 .swiper-button-next',
			prevEl: '#st01 .swiper-button-prev',
		},
		pagination: {
			el: "#st01 .swiper-pagination",
			clickable: true,
		},

	});
	var statusSwiper02 = new Swiper("#st02 .pc_slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '#st02 .swiper-button-next',
			prevEl: '#st02 .swiper-button-prev',
		},
		pagination: {
			el: "#st02 .swiper-pagination",
			clickable: true,
		},
	});

	var statusSwiperM01 = new Swiper("#st01 .m_slider", {
		slidesPerView: 1,
		spaceBetween: 25,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '#st01 .swiper-button-next',
			prevEl: '#st01 .swiper-button-prev',
		},
		pagination: {
			el: "#st01 .swiper-pagination",
			clickable: true,
		},

	});
	var statusSwiperM02 = new Swiper("#st02 .m_slider", {
		slidesPerView: 1,
		spaceBetween: 25,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '#st02 .swiper-button-next',
			prevEl: '#st02 .swiper-button-prev',
		},
		pagination: {
			el: "#st02 .swiper-pagination",
			clickable: true,
		},
	});
	var ww = $(window).width();
	var statusSwiperM03 = undefined;

	function initSwiper() {
		if (ww < 901 && statusSwiperM03 == undefined) {
			statusSwiperM03 = new Swiper(".status_slide_wrap", {
				slidesPerView: 'auto',
				spaceBetween: 15,
				observer: true,
				observeParents: true,
			});
			statusSwiperM03.init();
		} else if (ww >= 901 && statusSwiperM03 != undefined) {
			statusSwiperM03.destroy();
			statusSwiperM03 = undefined;
		}
	}

	initSwiper();

	$(window).on('resize', function () {
		ww = $(window).width();
		initSwiper();
	});

	//전경
	var interior = new Swiper(".interior", {
		slidesPerView: 3,
		centeredSlides: true,
		spaceBetween: 30,
		initialSlide: 0,
		loop: true,
		slidesOffsetBefore: 0,
		navigation: {
			nextEl: '.interior .swiper-button-next',
			prevEl: '.interior .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			1200: {
				spaceBetween: 40,
			},
		},
	});
	//소식
	var newsSwiper = new Swiper('.news .swiper-container', {
		 slidesPerView:3,
		 grabCursor: true,
		 loop:false,
		 pagination: {
		   el: '.news .swiper-pagination',
		   type: 'progressbar',
		   clickable: true,
		 },
		navigation: {
			nextEl: '.news .swiper-button-next',
			prevEl: '.news .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 15,
			},
		},
	   });

	   //탑버튼
	   $('.top_btn').click(function() {
			$.fn.fullpage.moveTo(1, 1);
	   });

});
