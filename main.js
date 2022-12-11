$(function () {
    var menuhe = $('#menu').height(); // высота меню
    var menu = menuhe + 50; // прибавляем 50
    $("area[href*=#],a[href*=#]:not([href=#]):not([href^='#tab']):not([href^='#quicktab']):not([href^='#pane']):not([href *= '#inline'])").click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - menu
                }, 1500);
                return false;
            }
        }
    });
});

