$(function(){
    menuResize();

    $(window).resize(function(){
       menuResize();
    })

    $('header button').click(function(){
        var open = $('header').hasClass('open');
        var menu = $('header ul').parent();
        var search = $('header nav').hasClass('nav-search');

        if(open){
            menu.slideUp('slow', function(){
                $('header').removeClass('open');
           
                if(!search){ 
                    $('body').css('overflow', '');
                    $('header nav').removeClass("bg-primary");
                    $('header nav').addClass('bg-gradient-to-b from-black/60');
                }
            } );
           
        
        }else{
            menu.slideDown('slow');
            $('header').addClass('open');
            $('body').css('overflow', 'hidden');
            $('header nav').removeClass('bg-gradient-to-b from-black/60');
            $('header nav').addClass("bg-primary");
        }
    })

    $('a.scroll').click(function(e){
        e.preventDefault();
        var hash = $(this).attr("href");
        scrollTo(hash);
    })

    $(window).scroll(function(){
        var position = window.scrollY;
        var aboutTop = $('#about').offset().top;
        var aboutBottom = $('#about').height() + aboutTop;
        var productTop = $('#products').offset().top;
        var productBottom = $('#products').height() + productTop;
        
        if(position >= aboutTop && position <= aboutBottom){
            $('header a[href="#about"]').parent().addClass('active');
            
        }else{
            $('header a[href="#about"]').parent().removeClass('active');
        }

        if(position >= productTop && position <= productBottom){
            $('header a[href="#products"]').parent().addClass('active');
            
        }else{
            $('header a[href="#products"]').parent().removeClass('active');
        }
    })
})

function menuResize(){
    var menu = $('header ul').parent();
    
    if(window.innerWidth < 767){
        menu.css('display','none');
    }else{
        menu.css('display','');
        var search = $('header nav').hasClass('nav-search');
        if(!search){
            $('body').css('overflow', '');
            $('header nav').removeClass("bg-primary");
            $('header nav').addClass('bg-gradient-to-b from-black/60');
        }
        
    }
}

function scrollTo(hash){
    $('html, body').animate({
        'scrollTop': $(hash).offset().top
    }, 800);
}
