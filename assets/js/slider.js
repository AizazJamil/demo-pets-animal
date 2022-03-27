// Categories Slider
var swiper = new Swiper(".categories-swiper-container", {
    slidesPerView: 4,
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".cate-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".cate-swiper-button-next",
        prevEl: ".cate-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// New Categories Slider
var swiper = new Swiper(".new-categories-swiper-container", {
    slidesPerView: 4,
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".new-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".new-swiper-button-next",
        prevEl: ".new-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Inner Categories Slider
var swiper = new Swiper(".inner-categories-swiper-container", {
    slidesPerView: 4,
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".inner-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".inner-swiper-button-next",
        prevEl: ".inner-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Micro Categories Slider
var swiper = new Swiper(".micro-categories-swiper-container", {
    slidesPerView: 4,
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".micro-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".micro-swiper-button-next",
        prevEl: ".micro-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Micro Categories Slider
var swiper = new Swiper(".feedback-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 2,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".client-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".client-swiper-button-next",
        prevEl: ".client-swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


// Footer Mobile Accordion
const accordionButton  = document.querySelector('.plus-icon');
const footerLinkDisplay = document.querySelector('.ft-link-nav');

accordionButton.addEventListener('click', function() {
    footerLinkDisplay.classList.toggle('d-block');
})