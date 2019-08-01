//下拉框
(function(){
    var num = 0;

    $('[data-toggle=arrowdown]').hover(function(){
        var _id = $(this).attr('id');
        num = _id.substring(5, _id.length);
        $(this).find('a')
            .removeClass('run-down')
            .addClass('run-up');
        $('#nav-box'+num).slideDown(100);
    }, function(){
        $(this).find('a')
            .removeClass('run-up')
            .addClass('run-down');
        $('#nav-box'+num).hide();
    });
    $('[data-toggle=hidden-box]').hover(function(){
        var _id =  $(this).attr('id');
        num = _id.substring(5, _id.length);
        $('#arrow'+num).addClass('nav-hover')
            .find('li').removeClass('run-down')
            .addClass('run-up');
        $(this).show();
    }, function(){
        $('#arrow'+num).removeClass('nav-hover')
            .find('li').removeClass('run-up')
            .addClass('run-down');
        setTimeout(function(){
            $('#arrow'+num).find('li').removeClass('run-down');
        }, 100);
        $(this).hide(200);
    });
})(jQuery);

// 新闻

        $('.newtit li').hover(function() {
            $('.newtit li').removeClass();
            $(this).addClass("new_active");
            var index = $('.newtit li').index(this);
            $('.con').hide();
            $('.con').eq(index).show();
        })