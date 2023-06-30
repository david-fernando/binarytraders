$('.count').each(function() {
    var $this = $(this),
        countTo = $this.text(),
        duration = 2000;

    $({ Counter: 0 }).animate({ Counter: countTo }, {
        duration: duration,
        easing: 'swing',
        step: function() {
            $this.text(Math.ceil(this.Counter));
        }
    });
});

$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 280) {
        $('#navbar-content').addClass('navbar-active');
    } else {
        $('#navbar-content').removeClass('navbar-active');
    }
});

AOS.init();

jQuery.event.special.touchstart = {
    setup: function(_, namespaces, handler) {
        var options = { passive: !namespaces.includes("noPreventDefault") };
        this.addEventListener("touchstart", handler, options);
    }
};

jQuery.event.special.touchmove = {
    setup: function(_, namespaces, handler) {
        var options = { passive: !namespaces.includes("noPreventDefault") };
        this.addEventListener("touchmove", handler, options);
    }
};

jQuery.event.special.wheel = {
    setup: function(_, namespaces, handler) {
        var options = { passive: true };
        this.addEventListener("wheel", handler, options);
    }
};

jQuery.event.special.mousewheel = {
    setup: function(_, namespaces, handler) {
        var options = { passive: true };
        this.addEventListener("mousewheel", handler, options);
    }
};

(function () {
    const burger = document.querySelector('.burger-container');
    const header = document.querySelector('.header');

    burger.addEventListener('click', function() {
        header.classList.toggle('menu-opened');
    });

})();

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
});

$(document).on('click', function (e) {
    const target = e.target;
    const header = $('.header');
    if (!$(target).closest('.header').length && header.hasClass('menu-opened')) {
        header.removeClass('menu-opened');
        $('.navTrigger').removeClass('active');
    }
});
