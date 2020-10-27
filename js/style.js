$(function () { 
    $('.play-left-arrow').click(function (e) { 
        e.preventDefault();
        
        $('.player_left').toggleClass('open-list');
    });

    $('.queue .que_button').click(function (e) { 
        e.preventDefault();
        
        $('.playlist-wrap').addClass('queue-open');
    });

    $('.queue-top .queue-close i').click(function (e) { 
        e.preventDefault();
        
        $('.playlist-wrap').removeClass('queue-open');
    });

    $('.player_close').click(function (e) { 
        e.preventDefault();
        
        $('.player_wrapper').toggleClass('player_down');
    });

    $('.nav-close').click(function (e) { 
        e.preventDefault();
        
        $('.side-menu').toggleClass('open_nav');
    });

    $('.right-button .close-sidebar').click(function (e) { 
        e.preventDefault();
        
        $('.side-menu').toggleClass('open_nav');
    });

    $('.more_icon').click(function (e) { 
        e.preventDefault();
        
        $(this).next().toggleClass('xh-block-more');
    });

    $('.album_btn .play_btn').click(function (e) { 
        e.preventDefault();
        
        $('.play-song').toggleClass('pause-song');
    });


    // $('.nav-wrapper ul li').click(function (e) { 
    //     e.preventDefault();
        
    //     $('.nav-wrapper li').removeClass('active');
    //     $(this).addClass('active');

    // });
 });