$(document).ready(function() {
    //검색 input search
    var search = $('#search')
    var searchList = $('.list')
    var searchBtn = $('.searchBtn')
    var box = $('.box')

    searchBtn.click(function() {
        search.focus();
        box.addClass('on')
    });

    search.click(function(){
        searchList.addClass('on')
        searchList.slideDown();
    })

    search.focusout(function(){
        box.removeClass('on');
        searchList.removeClass('on');
        searchList.hide();
    })
});


// 
// $('.visual .slide').click(function(){
//     console.log(55);
// })
