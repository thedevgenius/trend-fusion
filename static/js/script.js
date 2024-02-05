$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
        }
    });

    const swiper2 = new Swiper(".product-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 50000
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});