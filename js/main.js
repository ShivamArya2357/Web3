$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navBar').toggleClass('nav-toggle'); 
    });

    $(window).on('scroll load', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navBar').removeClass('nav-toggle'); 
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
        $('section').each(function() {
            var top = $(window).scrollTop();
            console.log($(this).offset().top);
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if (top >= offset && top < height + offset) {
                $('.navBar ul li a').removeClass('active');
                $('.navBar').find('[href="#'+ id + '"]').addClass('active');
            }
        })
    });
})