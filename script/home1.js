// Wow JS
new WOW().init();

// Header
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar_header").style.background = "var(--white-light)";

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

// Fetch users fron jsonplaceholder for our teams
let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.about_card_wrapper').innerHTML = '';
        data.slice(0, 6).map((user, i) => {

            let rand1 = Math.floor(Math.random() * 256);
            let rand2 = Math.floor(Math.random() * 256);
            let rand3 = Math.floor(Math.random() * 256);

            let background = `rgb(${rand1}, ${rand2}, ${rand3})`;

            let aboutCard = `<div class="about_card">
            <div>
                <figure class="about_image" style="background: ${background}">
                    <span class="about_more_icon" onclick="openAboutMore(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </span>
                </figure>
                <div class="about_card_info">
                    <h3 class="about_name">${user.name}</h3>
                    <p class="about_profession">CEO & Founder</p>
                    <p class="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                        voluptates officiis, quibusdam minima vitae autem nobis repudiandae neque dignissimos
                        fugiat
                        maxime aliquam adipisci soluta voluptatum id sapiente quae perspiciatis impedit.</p>
                </div>
            </div>
            <div class="about_card_overlay">
                <div class="close_icon_wrapper" onclick="closeAboutMore(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" width="25px" height="25px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div class="about_info">
                    <p><span>Name:</span> ${user.name}</p>
                    <p><span>Usename:</span> ${user.username}</p>
                    <p><span>Bio:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
                        repellat.</p>
                    <p><span>Email:</span> ${user.email}</p>
                    <p><span>Phone:</span> ${user.phone}</p>
                    <p><span>Address:</span>
                    <Address>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</Address>
                    </p>
                    <a href="#" class="btn">Contact ${user.username}</a>
                </div>
            </div>
        </div>`;
            document.querySelector('.about_card_wrapper').innerHTML += aboutCard;
        })
    });

const openAboutMore = (index) => {
    document.querySelectorAll('.about_card_overlay')[index].classList.add('active')
}

const closeAboutMore = (index) => {
    document.querySelectorAll('.about_card_overlay')[index].classList.remove('active')
}

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

// Window onload
window.onload = () => {
    document.querySelector('.loading').style.display = "none";

    document.documentElement.style.setProperty('--secondary-color1', localStorage.getItem('secondary1'));
    document.documentElement.style.setProperty('--secondary-color2', localStorage.getItem('secondary2'));
    document.documentElement.style.setProperty('--gradient-color1', localStorage.getItem('gradient1'));
    document.documentElement.style.setProperty('--gradient-color2', localStorage.getItem('gradient2'));


    document.documentElement.style.setProperty('--primary-background', localStorage.getItem('primaryBackground'));
    document.documentElement.style.setProperty('--primary-color', localStorage.getItem('primaryColor'));
    document.documentElement.style.setProperty('--white-color', localStorage.getItem('whiteColor'));
    document.documentElement.style.setProperty('--white-light', localStorage.getItem('whiteLight'));


    document.querySelector(`.color_wrapper [data-color="${localStorage.getItem('dataColor')}"]`).classList.add('active');

    document.querySelector(`.theme_wrapper [data-theme="${localStorage.getItem('dataTheme')}"]`).classList.add('active');

}

// Choose theme
document.querySelectorAll('.theme_wrapper div').forEach(theme => {
    theme.addEventListener('click', () => {

        let currentTheme = document.querySelector(`.theme_wrapper [data-theme="${localStorage.getItem('dataTheme')}"]`);


        if (theme.dataset.theme === "light") {
            let primaryBackground = '#f8f9fa';
            let primaryColor = '#000000';
            let whiteColor = '#ffffff';
            let whiteLight = 'rgba(255 255 255 / 65%)';

            document.documentElement.style.setProperty('--primary-background', primaryBackground);
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--white-color', whiteColor);
            document.documentElement.style.setProperty('--white-light', whiteLight);

            localStorage.setItem('dataTheme', 'light');
            localStorage.setItem('primaryBackground', primaryBackground);
            localStorage.setItem('primaryColor', primaryColor);
            localStorage.setItem('whiteColor', whiteColor);
            localStorage.setItem('whiteLight', whiteLight);

            currentTheme.className = '';
            theme.classList.add('active');

        }
        else {
            let primaryBackground = '#000000';
            let primaryColor = '#f8f9fa';
            let whiteColor = '#111111';
            let whiteLight = 'rgba(0 0 0 / 65%)';

            document.documentElement.style.setProperty('--primary-background', primaryBackground);
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--white-color', whiteColor);
            document.documentElement.style.setProperty('--white-light', whiteLight);

            localStorage.setItem('dataTheme', 'dark');
            localStorage.setItem('primaryBackground', primaryBackground);
            localStorage.setItem('primaryColor', primaryColor);
            localStorage.setItem('whiteColor', whiteColor);
            localStorage.setItem('whiteLight', whiteLight);

            currentTheme.className = '';
            theme.classList.add('active');
        }
    });
})

// Choose color
document.querySelectorAll('.color_wrapper div').forEach(color => {
    color.addEventListener('click', () => {

        let currentColor = document.querySelector(`.color_wrapper [data-color="${localStorage.getItem('dataColor')}"]`);


        if (color.dataset.color === "sky") {
            let secondary1 = 'rgb(69, 83, 157)';
            let secondary2 = 'rgb(76, 179, 198)';

            let gradient1 = 'rgb(69, 83, 157, .2)';
            let gradient2 = 'rgb(76, 179, 198, .2)';

            document.documentElement.style.setProperty('--secondary-color1', secondary1);
            document.documentElement.style.setProperty('--secondary-color2', secondary2);
            document.documentElement.style.setProperty('--gradient-color1', gradient1);
            document.documentElement.style.setProperty('--gradient-color2', gradient2);

            localStorage.setItem('secondary1', secondary1);
            localStorage.setItem('secondary2', secondary2);
            localStorage.setItem('gradient1', gradient1);
            localStorage.setItem('gradient2', gradient2);

            localStorage.setItem('dataColor', 'sky');

            currentColor.className = '';
            color.classList.add('active');

        }
        else if (color.dataset.color === "rosy") {
            let secondary1 = '#504c89';
            let secondary2 = '#b61ec9';

            let gradient1 = 'rgb(80, 76, 137, .2)';
            let gradient2 = 'rgb(182, 30, 201, .2)';

            document.documentElement.style.setProperty('--secondary-color1', secondary1);
            document.documentElement.style.setProperty('--secondary-color2', secondary2);
            document.documentElement.style.setProperty('--gradient-color1', gradient1);
            document.documentElement.style.setProperty('--gradient-color2', gradient2);

            localStorage.setItem('secondary1', secondary1);
            localStorage.setItem('secondary2', secondary2);
            localStorage.setItem('gradient1', gradient1);
            localStorage.setItem('gradient2', gradient2);

            localStorage.setItem('dataColor', 'rosy');

            currentColor.className = '';
            color.classList.add('active');

        }
        else {
            let secondary1 = '#B1B2FF';
            let secondary2 = '#AAC4FF';

            let gradient1 = 'rgb(177 178 255 / 30%)';
            let gradient2 = 'rgb(170 196 255 / 30%)';

            document.documentElement.style.setProperty('--secondary-color1', secondary1);
            document.documentElement.style.setProperty('--secondary-color2', secondary2);
            document.documentElement.style.setProperty('--gradient-color1', gradient1);
            document.documentElement.style.setProperty('--gradient-color2', gradient2);

            localStorage.setItem('secondary1', secondary1);
            localStorage.setItem('secondary2', secondary2);
            localStorage.setItem('gradient1', gradient1);
            localStorage.setItem('gradient2', gradient2);

            localStorage.setItem('dataColor', 'purple');

            currentColor.className = '';
            color.classList.add('active');

        }
    });
})

const playBtnAnimation = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    document.querySelector('.play_btn').style.top = `${y}px`
    document.querySelector('.play_btn').style.left = `${x}px`
};

// document.querySelector('.hero_right_video').addEventListener('mousemove', (event) => {
//     playBtnAnimation(event);
// });
// document.querySelector('.hero_right_video').addEventListener('mouseenter', playBtnAnimation);
// document.querySelector('.hero_right_video').addEventListener('mouseleave', playBtnAnimation);