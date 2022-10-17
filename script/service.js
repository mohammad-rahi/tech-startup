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

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.more_service').innerHTML = '';

        return data.slice(0, 8).map(({ title, body, id }) => {
            let rand1 = Math.floor(Math.random() * 256);
            let rand2 = Math.floor(Math.random() * 256);
            let rand3 = Math.floor(Math.random() * 256);

            let service_title;

            if (title.length > 20) {
                service_title = `${title.slice(0, 20)}...`;
            }
            else {
                service_title = title;
            }

            let service = `<div class="more_service_card">
            <h3 class="more_service_title">${service_title}</h3>
            <a href="./service-details.html">
                <figure class="more_service_photo" style="background-color: rgb(${rand1} ${rand2} ${rand3})">
                </figure>
            </a>
            </div>`;

            document.querySelector('.more_service').innerHTML += service;
        })
    })
    .catch(err => console.log(err.message));