$(document).ready(function() {
    $('ul.card_list li').on('click', function() {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    var $card_list = $('.card_list')

    if ($('section').find($('.slide'))) {
        $(".slide").bxSlider({
            // 슬라이드 시작
        });
    }

    var chk_5 = $('#chk_5')
    var $gray = $('.gray')


    $('input').on("keyup input", function() {
        if ($('input:checkbox').is(":checked") || $("input:radio[name='radio']").is(':checked')) {
            $gray.addClass('yellow')
        }
    })
});
