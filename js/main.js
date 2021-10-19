$(window).scroll(function () {
    $('.card').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});

$(window).scroll(function () {
    $('.famous-image').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});

$(window).scroll(function () {
    $('.headings').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});


$(window).scroll(function () {
    $('.container').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});


$(window).scroll(function () {
    $('.icons').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});

$(window).scroll(function () {
    $('.title').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});


$(window).scroll(function () {
    $('.title-images').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});

$(window).scroll(function () {
    $('.social-media').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});
$(window).scroll(function () {
    $("footer").each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight(),
            bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});






