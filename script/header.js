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