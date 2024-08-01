$(document).ready(function() {
    //스크롤 nav 픽스
    function scroll_header() {
        $(window).on('scroll', function() {
            var scr = $(this).scrollTop();
            if (scr >= 90) {
                $('.na').addClass('on');
            } else {
                $('.na').removeClass('on');
            }
        });
    }
    scroll_header();
    //검색 서치 인풋 온오프


    var search = $('.search')
    var input = document.querySelector('input')
    var searchBtn = document.querySelector('.searchIcon')


    searchBtn.addEventListener('click', function(e) {
        var bool = true
        search.toggleClass('on')
        input.focus();
        inputSearch(bool)
    })
    window.onscroll = () =>{
        search.removeClass('on')

    }


    function inputSearch(bool) {
        document.addEventListener('keydown', function(e) {
            if (e.keyCode == 13 && bool) {
                bool = false;
                search.removeClass('on');
                var inputVal = input.value
                input.value = ""
                alert(inputVal + ' 상품은 아직 준비중 입니다.')
                searchBtn.style.display = 'block'
            }
        });
    }


    //메인 비주얼 슬라이드
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //제품 텝메뉴
    $('.TIMEEVENT ul.tab li').on('click', function() {
        var idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on')
        $('ul.tapIdx').removeClass('on').eq(idx).addClass('on');
    });

    //스티키 스크롤
    function scr_top() {
        $(window).on('scroll', function() {
            var scr = $(this).scrollTop();
            if (scr > 20) {
                $('.top').addClass('on');
            } else {
                $('.top').removeClass('on');
            }
        });
    }
    scr_top();

    function top() {
        $('.top').on('click', function() {
            $('html').animate({
                scrollTop: 0
            }, 500);
        });
    }
    top();

});
