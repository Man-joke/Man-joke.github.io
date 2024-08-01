// 메인 슬라이드 추가 jQuery
// $(window).load(function () { $('.slider01').flexslider({ animation: "slide", pauseOnHover: true, start: function (slider) { } }); });
// $(window).load(function () { $('.slider02').flexslider({ animation: "slide", pauseOnHover: true, start: function (slider) { } }); });
// $(window).load(function () { $('.slider03').flexslider({ animation: "slide", pauseOnHover: true, start: function (slider) { } }); });	

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



