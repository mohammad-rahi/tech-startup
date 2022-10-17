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