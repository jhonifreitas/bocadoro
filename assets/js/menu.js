$(function(){
    menuResize();
    $(window).resize(function(){
       menuResize();
    })

    $('header button').click(function(){
        var open = $('header').hasClass('open');
        var menu = $('header ul').parent();
        if(open){
            menu.css('display', 'none');
            $('header').removeClass('open');
            $('body').css('overflow', '');
            $('header nav').removeClass("bg-primary");
            $('header nav').addClass('bg-gradient-to-b from-black/60');
        }else{
            menu.css('display', '');
            $('header').addClass('open');
            $('body').css('overflow', 'hidden');
            $('header nav').removeClass('bg-gradient-to-b from-black/60');
            $('header nav').addClass("bg-primary");
        }
        
    })

})

function menuResize(){
    var menu = $('header ul').parent();
    if(window.innerWidth < 767){
        menu.css('display','none');
    }else{
        menu.css('display','');
        $('body').css('overflow', '');
        $('header nav').removeClass("bg-primary");
        $('header nav').addClass('bg-gradient-to-b from-black/60');
    }
}
