function resizeApply() {
    var minWidth = 375;
    var body = document.getElementsByTagName("body")[0];
    if (window.innerWidth < minWidth) {
        body.style.zoom = window.innerWidth / minWidth
    } else {
        body.style.zoom = 1;
    }
}
window.onload = function () {
    window.addEventListener("resize", function () {
    resizeApply();
    });
};
resizeApply();


$('.mobile_menu').click(function(){
    $('.gnb_menu').show()
})
$(' .close').click(function(){
    $('.gnb_menu').hide()
})

// jQuery or skript 적용부분
$('.visual-tab li a').click(function () {
    $(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active')
})
$('.visual-tab .mm01 a').click(function () {
    $('.slider01').show().siblings('.slider').hide()
})
$('.visual-tab .mm02 a').click(function () {
    $('.slider02').show().siblings('.slider').hide()
})
$('.visual-tab .mm03 a').click(function () {
    $('.slider03').show().siblings('.slider').hide()
})	


// 220509 메인 슬라이드 비주얼 추가
if ($(".slider01").length || $(".slider01").length || $(".slider01").length) {
    var swiper = new Swiper(".slider01", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        observer: true,
        observeParents: true,
      });
    var swiper = new Swiper(".slider02", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        observer: true,
        observeParents: true,
      });
    var swiper = new Swiper(".slider03", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        observer: true,
        observeParents: true,
      });
}


// 매거진 슬라이드
if($('#sReportSlider1').length){
    var slider1 = $('#sReportSlider1').bxSlider({mode: 'fade'});
    var count1 = slider1.getSlideCount();
    $('#sliderCount1').text(count1);
}
// 예고편 슬라이드
if($('#sReportSlider2').length){
    var slider2 = $('#sReportSlider2').bxSlider({mode: 'fade'});
    var count2 = slider2.getSlideCount();
    $('#sliderCount2').text(count2);
}
// 포스터 스틸컷 슬라이드
if($('#sReportSlider3').length){
    var slider3 = $('#sReportSlider3').bxSlider({mode: 'fade'});
    var count3 = slider3.getSlideCount();
    $('#sliderCount3').text(count3);
}

// 매거진
var $magazineItem = $(".magazineconbox-item")
var $magazineName = $(".magazineconbox-item strong")
var $magazineImgbox = $('.magazine__imgbox img')

$magazineItem.on("mouseenter mouseover", function () { 
    var imgAlt = $(this).find($magazineName).text();
    $magazineImgbox.attr('alt', imgAlt);
    $magazineItem.removeClass('on');
    $(this).addClass('on');
});

// 마이페이지 예매취소/ 환불 관련안내
$('.addcancle-con').click(function(){
    $('.cancle-contents.cont01, .cancle-contents.cont02, .addcancle-con').toggleClass('on')
})


