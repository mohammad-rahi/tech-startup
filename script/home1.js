new WOW().init();

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar_header").style.padding = "1rem";
        document.querySelector(".navbar_header").style.background = "rgba(255 255 255 / 65%)";
        document.querySelector(".navbar_header").style.backdropFilter = "blur(12px)";
    } else {
        document.querySelector(".navbar_header").style.padding = "1.5rem";
        document.querySelector(".navbar_header").style.background = "unset";
        document.querySelector(".navbar_header").style.backdropFilter = "unset";
    }
}