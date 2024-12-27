var front = front || {};

front.common = front.common || {};

front.common = (function () {
    var init = function() {
        this.a();
        this.makeCommaInput();
        this.makeCommaText();
        this.hideNumber();
        this.clickIconEvent();
        this.ani();
    };

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    };

    var clickIconEvent = function () {
        $('.card-header').on('click',function () {
            $('.card-header').removeClass('active');
            if ($(this).attr('aria-expanded')=="true") {
                console.log(true);
                $(this).removeClass('active');
            } else {
                console.log(false);
                $(this).addClass('active');
            }
        })
    };
    /*
     comma 생성 함수
    * */
    var comma = function (num){
        if(!num) {
            return "";
        }
        var len, point, str;
        num = num + "";
        point = num.length % 3 ;
        len = num.length;
        str = num.substring(0, point);
        while (point < len) {
            if (str != "") str += ",";
            str += num.substring(point, point + 3);
            point += 3;
        }
        return str;
    };
    /*
     input 태그에서 comma() 사용시
    * */
    var makeCommaInput = function () {
        const that = this;
        $('._commaI').each(function () {
            var num = $(this).val() * 1;
            var value = that.comma(num);
            $(this).val(value);
        })
    };
    /*
     span 태그에서 comma() 사용시
    * */
    var makeCommaText  = function () {
        const that = this;
        $('._commaS').each(function () {
            var num = $(this).text().split('원')[0] * 1;
            var value = that.comma(num);
            $(this).text(value).append('<span class="current">원</span>');
        })
    };
    /*
     eye 버튼 클릭 시, 숫자를 hide 해주는 함수
    * */
    var hideNumber = function () {
        var that = this;
        $('.btn-eye-on').on('click',function () {
            $('.icon-eye-on').toggleClass('icon-eye-off');

            var val = $('._value').val(); // 총 급여
            var commaRemoved = val.replace(/\,/g,'');

            var replaced;

            // * 일 때 -> 숫자로 변환
            // 개발에서 data-income 값 바인딩 필요
            if (isNaN(+(commaRemoved))) {
                replaced = Number($('._value').data('income'));
                replaced = that.comma(replaced);
            }
            // 숫자일때 -> * 로 변환
            else {
                replaced = val.replace(/[0-9]/g, '*');
            }

            $('._value').val(replaced);
        })
    };

    var ani = function () {
        AOS.init();
    }
    return {
        a : a,
        clickIconEvent : clickIconEvent,
        comma : comma,
        makeCommaInput : makeCommaInput,
        makeCommaText : makeCommaText,
        hideNumber : hideNumber,
        init : init,
        ani : ani
    }
})();
$(function () {
    front.common.init();
});

front.chart = front.chart || {};

front.chart = (function () {
    var init = function() {
        this.donutOpen();
    };

    /**
     * DonutChart
     * @type {DonutChart}
     *
     * 공제 화면에서 '공제한도' , '공제예상금액' 이용하여 도넛 차트 출력
     *
     * 도넛차트 영역 id = "donut"
     *
     * 공제한도 id = "_deduct_total"
     * data-amount = 공제한도금액(number type)
     *
     * 공제예상금액 id = "_deduct_estimate"
     * data-amount = 공제예상금액(number type)
     *
     * ### 라이브러리에서 100% 일 경우 1을 인식 못함 -> 0.9999 로 대체 입력시 정상 바인딩
     */
    var donutOpen = function () {
        if($('#donut').length !== 0){
            $('#donut').children('svg').remove();

            var deductTotal = $('#_deduct_total').data('amount');
            var deductEstimates = $('#_deduct_estimates').data('amount');

            // (공제 예상 금액 백분율/100)
            var val = deductEstimates/deductTotal;
            val = Number(val.toFixed(2));
            // 나머지
            var remains = Number((1 - val).toFixed(2));

            // 라이브러리에서 1 인식 못함
            if(val === 1) val = 0.9999;
            if(remains === 1) remains = 0.9999;

            var donut = document.getElementById('donut');
            var donutSize = $(donut).width();

            var myChart = new DonutChart(donut, {
                stroke: 4,
                scale: 100,
                r: (donutSize / 2), // radius
                items: [{ value: remains }, { value: val }]
            });
        }
    };

    return {
        donutOpen : donutOpen,
        init : init,
    }
})();
$(function () {
    front.chart.init();
});


front.form = front.form || {};
front.form = (function () {
    var init = function() {
        // this.setSelect();
        this.onFucusText();
        this.onBlurText();
    };

    var datepicker = function () {
        //https://uxsolutions.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&maxViewMode=4&todayBtn=false&clearBtn=false&language=kr&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox
        // $('._datepicker').datepicker({
        //     language: "kr",
        //     format: "yyyy-mm-dd",
        //     todayHighlight: true,
        //     todayBtn: false,
        //     clearBtn: false
        // });
    };
    var onFucusText = function () {
        $('input[type="text"], input[type="password"], input[type="email"]').on('focus', function () {
            var tooltip = $(this).data('tooltip');
            if (tooltip !== undefined){
                $(this).after('<span class="tooltip-form">' + tooltip + '</span>');
            }
        })
    }
    var onBlurText = function () {
        $('input[type="text"], input[type="password"], input[type="email"]').on('blur', function () {
            if ( !$(this).hasClass('select-dropdown') ) {
                $(this).siblings('.tooltip-form').remove();
            }
        })
    }


    /**
     * setError validation 에러노출
     * @param target : jQuery selector
     * @param massage : string
     * @param position : 'top' (default : 'bottom')
     */
    var setError = function (target, massage, position) {
        var nTarget = $(target).outerWidth();

        $(target).wrap('<div  class="error"></div>')
            .after('<span class="help-text" style="width : '+nTarget+'px">'+massage+'</span>');
        if(position == "top") {
            $(target).parent('.error').addClass('error_top');
        }
    };

    /**
     * destroyError
     * @param target : jQuery selector
     */
    var destroyError = function  (target) {
        $(target).unwrap()
            .siblings('.help-text').remove();
    };

    /**
     * jqGridCheckBox customizing
     * @param target : jQuery selector
     */

    var jqGridCheckBox =  function (target) {
        $('.ui-jqgrid input[type=checkbox]').after('<label></label>');
    };

    return {
        datepicker : datepicker,
        onFucusText : onFucusText,
        onBlurText : onBlurText,
        setError : setError,
        destroyError : destroyError,
        jqGridCheckBox : jqGridCheckBox,
        init : init,
    }
})();
$(function () {
    front.form.init();
});


front.popup = front.popup || {};

front.popup = (function () {

    var _btnOpen = $('._popupOpen');
    var _btnClose = $('._popupClose');

    var init = function() {
        this.checkOpen();
        this.claimCheck();
        this.open();
        this.close();
    };
    var open = function () {
        _btnOpen.on('click', function () {
            var id = $(this).data('id');
            $("#" + id).show();
            // $(document.body).css({
            //     "overflow" : "hidden"
            // })
        });
    };
    var close = function () {
        _btnClose.on('click', function () {
            $(this).parents('.popup_wrap').hide();
            // $(document.body).css({
            //     "overflow" : "visible"
            // })
        });
    };

    var claimCheck = function () {
        $('._toggleCheck').on('click', function () {
            var product = $(this).parents('.product');
            if ($(this).is(':checked')) {
                product.next('._cancelArea').show();
                product.find('.wrap_input').show();
                product.find('.price .checked').show();
                $('.text_calc').append('<em></em>')
            } else {
                product.next('._cancelArea').hide();
                product.find('.wrap_input').hide();
                product.find('.price .checked').hide();
                $('.text_calc em').remove()
            }
        });
    };

    var checkOpen = function () {
        $('._checkOpen').on('click', function () {
            if ($(this).is(':checked')) {
                var id = $(this).data('id');
                $("#" + id).show();
                // $(document.body).css({
                //     "overflow" : "hidden"
                // })
            } else {
                $("#" + id).hide();
            }
        });
    };

    return {
        checkOpen : checkOpen,
        claimCheck : claimCheck,
        open : open,
        close : close,
        init : init,
    }
})();
$(function () {
    front.popup.init();
})

