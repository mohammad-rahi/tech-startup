// Wow JS
new WOW().init();

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
        data.slice(0, 4).map(photo => {
            let blog = `<div class="blog">
            <figure style="background-image: url('${photo.url}');" class="blog_image"></figure>
            <div class="blog_info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore cumque sed placeat architecto eius asperiores modi maxime... <a href="./blog-details.html" class="read_more">Read more</a></p>
            </div>
        </div>`;
            document.querySelector('.blog_wrapper').innerHTML += blog;
        })
    })
    .catch(err => {
        document.querySelector('.blog_wrapper').innerHTML += `<div class="blog_skeleton"></div>
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