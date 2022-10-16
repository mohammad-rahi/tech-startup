// Wow JS
new WOW().init();

// Header
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar_header").style.background = "var(--white-color)";

        if (window.innerWidth > 800) {
            document.querySelector(".navbar_header").style.backdropFilter = "blur(12px)";
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
        // document.querySelector('.blog_wrapper').innerHTML = '';
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
    })
    .catch(err => {
        document.querySelector('.blog_wrapper').innerHTML += `<div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>`;

    });

// Fetch users from jsonplaceholder for our teams
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

// About more options 
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
}

const closeMenu = () => {
    document.querySelector('.navbar_menu').classList.remove('active');
    document.querySelector('.navbar_overlay').classList.remove('active');
}

// Window onload
window.onload = () => {
    document.querySelector('.loading').style.display = "none";

    if (localStorage.getItem('dataColor')) {
        document.querySelector(`.mobile_color_wrapper [data-color="${localStorage.getItem('dataColor')}"]`).classList.add('active');

        document.querySelector(`.color_wrapper [data-color="${localStorage.getItem('dataColor')}"]`).classList.add('active');
    }
    else {
        document.querySelector(`.mobile_color_wrapper [data-color="sky"]`).classList.add('active');

        document.querySelector(`.color_wrapper [data-color="sky"]`).classList.add('active');
    }

    if (localStorage.getItem('purple')) {
        document.body.classList.add('purple');
        document.body.classList.remove('rosy');
        document.body.classList.remove('sky');
    }
    else if (localStorage.getItem('rosy')) {
        document.body.classList.add('rosy');
        document.body.classList.remove('sky');
        document.body.classList.remove('purple');
    }
    else {
        document.body.classList.add('sky');
        document.body.classList.remove('rosy');
        document.body.classList.remove('purple');
    }

    if (localStorage.getItem('dataTheme') === "dark") {
        document.body.classList.add('dark');
        document.body.classList.remove('light');

        document.querySelector(`.mobile_theme_wrapper [data-theme="dark"]`).classList.add('active');
        document.querySelector(`.theme_wrapper [data-theme="dark"]`).classList.add('active');

    }
    else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');

        document.querySelector(`.theme_wrapper [data-theme="light"]`).classList.add('active');
        document.querySelector(`.mobile_theme_wrapper [data-theme="light"]`).classList.add('active');

    }

}

// Choose theme
const changeTheme = (target) => {
    document.querySelectorAll(`${target} div`).forEach(theme => {
        theme.addEventListener('click', () => {
            let prevTheme;

            if (localStorage.getItem('dataTheme')) {
                prevTheme = document.querySelector(`${target} [data-theme="${localStorage.getItem('dataTheme')}"]`);
            }
            else {
                prevTheme = document.querySelector(`${target} [data-theme="light"]`);
            }

            if (theme.dataset.theme === "light") {

                prevTheme.classList.remove('active');
                theme.classList.add('active');

                localStorage.setItem('dataTheme', 'light');

                document.body.classList.add('light');
                document.body.classList.remove('dark');

            }
            else {
                prevTheme.classList.remove('active');
                theme.classList.add('active');

                localStorage.setItem('dataTheme', 'dark');

                document.body.classList.add('dark');
                document.body.classList.remove('light');
            }
        });
    })
}

changeTheme('.mobile_theme_wrapper');
changeTheme('.theme_wrapper');

// Choose color
const changeColor = (target) => {
    document.querySelectorAll(`${target} div`).forEach(color => {
        color.addEventListener('click', () => {

            let prevColor = document.querySelector(`${target} [data-color="${localStorage.getItem('dataColor')}"]`);


            if (color.dataset.color === "sky") {
                // let secondary1 = 'rgb(69, 83, 157)';
                // let secondary2 = 'rgb(76, 179, 198)';

                // let gradient1 = 'rgb(69, 83, 157, .2)';
                // let gradient2 = 'rgb(76, 179, 198, .2)';

                // document.documentElement.style.setProperty('--secondary-color1', secondary1);
                // document.documentElement.style.setProperty('--secondary-color2', secondary2);
                // document.documentElement.style.setProperty('--gradient-color1', gradient1);
                // document.documentElement.style.setProperty('--gradient-color2', gradient2);

                // localStorage.setItem('secondary1', secondary1);
                // localStorage.setItem('secondary2', secondary2);
                // localStorage.setItem('gradient1', gradient1);
                // localStorage.setItem('gradient2', gradient2);

                localStorage.setItem('dataColor', 'sky');

                prevColor.classList.remove('active');
                color.classList.add('active');

                document.body.classList.add('sky');
                document.body.classList.remove('rosy');
                document.body.classList.remove('purple');

            }
            else if (color.dataset.color === "rosy") {

                localStorage.setItem('dataColor', 'rosy');

                prevColor.classList.remove('active');
                color.classList.add('active');

                document.body.classList.add('rosy');
                document.body.classList.remove('sky');
                document.body.classList.remove('purple');

            }
            else {

                localStorage.setItem('dataColor', 'purple');

                prevColor.classList.remove('active');
                color.classList.add('active');

                document.body.classList.add('purple');
                document.body.classList.remove('rosy');
                document.body.classList.remove('sky');

            }
        });
    })
};

changeColor('.mobile_color_wrapper');
changeColor('.color_wrapper');

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

// Select the HTML5 video
const video = document.querySelector("#video")
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if (video.ended) {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('input[type="range"]').value = `${curr}`;
    document.querySelector('#currentTime').innerText = (video.currentTime / 60).toFixed(2);
    document.querySelector('#durration').innerText = Math.abs(((video.duration / 60) - .28).toFixed(2));
})

document.querySelector('input[type="range"]').addEventListener('change', () => {
    video.currentTime = document.querySelector('input[type="range"]').value;
})

// pause or play the video
const play = (e) => {
    // Condition when to play a video
    if (video.paused) {
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
// trigger fullscreen
const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}
// download the video
const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
// rewind the current time
const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration / 100) * 5)
}
// forward the current time
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration / 100) * 5)
}