// Wow JS
new WOW().init();

// Header
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar_header").style.padding = "1rem";
        document.querySelector(".navbar_header").style.background = "rgba(255 255 255 / 65%)";

        if (window.innerWidth > 800) {
            document.querySelector(".navbar_header").style.backdropFilter = "blur(12px)";
        }
        else {
            if (document.querySelector('.navbar_menu').classList.contains('active')) {
                document.querySelector(".navbar_header").style.backdropFilter = "unset";
            }
            else {
                document.querySelector(".navbar_header").style.backdropFilter = "blur(12px)";
            }
        }

    } else {
        document.querySelector(".navbar_header").style.padding = "1.5rem";
        document.querySelector(".navbar_header").style.background = "unset";
        document.querySelector(".navbar_header").style.backdropFilter = "unset";
    }
}


// Services Scroll Horizontall
const serviceWrapper = document.querySelector(".service_wrapper");

serviceWrapper.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        serviceWrapper.scrollLeft += serviceWrapper.clientWidth;
        // if (serviceWrapper.scrollLeft <= 1943) {
        //     e.preventDefault();
        // }
        e.preventDefault();
    }
    else {
        serviceWrapper.scrollLeft -= serviceWrapper.clientWidth;
        // if (serviceWrapper.scrollLeft > 0) {
        //     e.preventDefault();
        // }
        e.preventDefault();
    }
});

// Fetch photos fron jsonplaceholder for blogs
let blogs = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.blog_wrapper').innerHTML = '';
        data.slice(0, 8).map(photo => {
            let blog = `<div class="blog">
            <figure style="background-image: url('${photo.url}');" class="blog_image"></figure>
            <div class="blog_info">
                <p>${photo.title}</p>
                <a href="#" class="btn">Read more <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg></a>
            </div>
        </div>`;
            document.querySelector('.blog_wrapper').innerHTML += blog;
        })
    });


// Menu for small devices
const openMenu = () => {
    document.querySelector('.navbar_menu').classList.add('active');
    document.querySelector('.navbar_overlay').classList.add('active');
    document.querySelector('.navbar_header').style.backdropFilter = "unset";
}

const closeMenu = () => {
    document.querySelector('.navbar_menu').classList.remove('active');
    document.querySelector('.navbar_overlay').classList.remove('active');
    document.querySelector('.navbar_header').style.backdropFilter = "blur(12px)";
}