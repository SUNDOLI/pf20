$(function () {
    const MVS = new Swiper('.main_visual .main_visual_slide', {
        loop: true,



    })
    const MNS = new Swiper('.news_img_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".main_news .arrows .next",
            prevEl: ".main_news .arrows .prev",
        },
    })
    const MTS = new Swiper('.news_txt_slide', {
        slidesPerView: 1,
        spaceBetween: 60,
        navigation: {
            nextEl: ".main_news .arrows .next",
            prevEl: ".main_news .arrows .prev",
        },

    });


    MNS.controller.control = MTS;
    MTS.controller.control = MNS;

    const SNS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".main_sns .arrows_right",
            prevEl: ".main_sns .arrows_left",
        },
    })


})
$(function () {
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_content .tab_menu li').removeClass('on');
        $(this).parent().addClass('on');
        $('.main_content .tab_content .con').removeClass('on');
        $('.main_content .tab_content .con').eq(idx).addClass('on')
    })
});