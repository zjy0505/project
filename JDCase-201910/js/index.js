$(function(){
    $('.topBanner .close').tap(function(){
        $('.topBanner').hide();
        $('.header').css('top',0);
        $('.content').css('padding-top','.4rem');
    })
})
// $(function() {
//     $("img").lazyload();
// });
$(function(){
    setInterval(function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if(top>350){
            $('.backTotop').show();
        }else{
            $('.backTotop').hide();
        }
    },500);
})