const slugs = ["data-analysis", "web-development", "cyber-security"];

const stockServices = [
    {
        title: "Data Analysis",
        slug: slugs[0],
        image: "./assets/images/data_analysis.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam? Atque, quo aspernatur inventore veniam fuga labore necessitatibus quas quis soluta saepe voluptas debitis nulla, dolore, aperiam tempora architecto repellat!"
    },
    {
        title: "Web Development",
        slug: slugs[1],
        images: "./assets/images/frontend.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam? Atque, quo aspernatur inventore veniam fuga labore necessitatibus quas quis soluta saepe voluptas debitis nulla, dolore, aperiam tempora architecto repellat!"
    },
    {
        title: "Portable Speaker",
        slug: slugs[2],
        price: 38,
        images: "./assets/images/cyber_security.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam? Atque, quo aspernatur inventore veniam fuga labore necessitatibus quas quis soluta saepe voluptas debitis nulla, dolore, aperiam tempora architecto repellat!"
    }
];

let query = window.location.search
let serviceId = query.split("id=")[1];

if (slugs.includes(serviceId.toString())) {

    let { title, image, description } = stockServices.find(service => service.slug === serviceId.toString());

    document.querySelector('.serviceDetails_title').innerHTML = title;
    document.querySelector('.serviceDetails_title_small').innerHTML = title;

    document.querySelector('.service_images').innerHTML = images.map(image => `<div><img src="${image}" onmouseover="imageFunction(this)" /></div>`).join("");

    document.querySelector('#serviceDetails_image').src = images[0];

    document.querySelector('#serviceDetails_image').classList.remove('loading_skeleton');

    document.querySelector('.serviceDetails_top').innerHTML = `
<ul>
<li><strong>Brand:</strong> Popular Brand</li>
<li><strong>Material:</strong> Metal</li>
<li><strong>MetalBrand:</strong> Asbyoi</li>
<li><strong>Item Dimensions:</strong> 1.57 x 1.57 x 1.57 inches</li>
<li><strong>LxWxH</strong></li>
</ul>`;

    document.querySelector('.wrapper_right_actions').innerHTML = `<p class="wrapper_right_price">
    <strong>Price: </strong>
    $<span id="price">${price}</span>
    </p>
    
    <p>
    <strong>Ratings: </strong>
    <span class="ratings">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
   </span>
 </p>
 <div class="action_btns">
   <a class="btn">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none"
viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round"
d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></a>
  <a class="btn">Buy Now <i class="fa-regular fa-credit-card"></i></a>
 </div>`;


    document.querySelector('.serviceDetails_bottom').innerHTML = `<p class="font-bold">About this item</p>
    <ul class="list-disc">
    ${description.map(list => `<li>${list}</li>`)
        }
    </ul>`;
}
else {
    // Fetch services from fake api
    fetch(`https://jsonplaceholder.typicode.com/posts/${serviceId}`)
        .then(res => res.json())
        .then(({ id, title, body }) => {
            let rand1 = Math.floor(Math.random() * 256);
            let rand2 = Math.floor(Math.random() * 256);
            let rand3 = Math.floor(Math.random() * 256);

            document.querySelector('.serviceDetails_title').innerHTML = title;
            document.querySelector('.serviceDetails_title_small').innerHTML = title;

            document.querySelector('.service_images').innerHTML = `<div><img style="background: rgb(${rand1} ${rand2} ${rand3})" /></div>`;

            // document.querySelector('#serviceDetails_image').src = images[0];

            document.querySelector('#serviceDetails_image').classList.remove('loading_skeleton');

            document.querySelector('.serviceDetails_top').innerHTML = `
<ul>
<li><strong>Brand:</strong> Popular Brand</li>
<li><strong>Material:</strong> Metal</li>
<li><strong>MetalBrand:</strong> Asbyoi</li>
<li><strong>Item Dimensions:</strong> 1.57 x 1.57 x 1.57 inches</li>
<li><strong>LxWxH</strong></li>
</ul>`;

            document.querySelector('.wrapper_right_actions').innerHTML = `<p class="wrapper_right_price">
<strong>Price: </strong>
$<span id="price">${price}</span>
</p>
<p>
<strong>Ratings: </strong>
<span class="ratings">
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
</span>
</p>
<div class="action_btns">
<a class="btn">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></a>
<a class="btn">Buy Now <i class="fa-regular fa-credit-card"></i></a>
</div>`;


            document.querySelector('.serviceDetails_bottom').innerHTML = `<p class="font-bold">About this item</p>
<ul class="list-disc">
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex
    saepe
    expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio
    impedit sint aut, neque dolorum eum odit.</li>
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex
    saepe
    expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio
    impedit sint aut, neque dolorum eum odit.</li>
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex
    saepe
    expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio
    impedit sint aut, neque dolorum eum odit.</li>
<li>Andy shoes are designed to keeping in mind durability as well as trends, the
    most
    stylish range of shoes &amp; sandals</li>
</ul>`;
        })
        .catch(err => {

        });
}

const imageFunction = (thisElement) => {
    document.querySelector('#serviceDetails_image').src = thisElement.src;
};

// Fetch prodcuts from fake prodcuts api
fetch('https://api.escuelajs.co/api/v1/services')
    .then(res => res.json())
    .then(services => {

        document.querySelectorAll('.scrollable_services').forEach(item => item.innerHTML = '');

        let electronicsservices = services.filter(service => service.category.name === "Electronics");

        electronicsservices.slice(0, 20).map(service => {
            let serviceItem;

            if (service.images[0]) {
                serviceItem = `<div class="scrollable_service" style="background-image: url('${service.images[0]}'); cursor: pointer;" onclick="window.location.href = './service-details.html?id=${service.id}'"></div>`;
            }
            else {
                serviceItem = `<div class="scrollable_service_skeleton"></div>`;
            }

            document.querySelectorAll('.scrollable_services')[0].innerHTML += serviceItem;
        })

        electronicsservices.slice(20, 40).map(service => {
            let serviceItem;

            if (service.images[0]) {
                serviceItem = `<div class="scrollable_service" style="background-image: url('${service.images[0]}'); cursor: pointer;" onclick="window.location.href = './service-details.html?id=${service.id}'"></div>`;
            }
            else {
                serviceItem = `<div class="scrollable_service_skeleton"></div>`;
            }

            document.querySelectorAll('.scrollable_services')[1].innerHTML += serviceItem;
        })
    })
    .catch(err => {

        document.querySelectorAll('.scrollable_services').forEach(item => {
            item.innerHTML = `<div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>
            <div class="scrollable_service_skeleton"></div>`
        })
    });

const serviceScroll = (index, pos) => {
    if (pos === "left") {
        document.querySelectorAll('.scrollable_services')[index].scrollLeft += (document.querySelector('.scrollable_services').clientWidth - 100);
    }
    else {
        document.querySelectorAll('.scrollable_services')[index].scrollLeft -= (document.querySelector('.scrollable_services').clientWidth - 100);
    }
};

document.querySelectorAll('.scrollable_services').forEach(item => {
    item.addEventListener('wheel', (event) => {
        event.preventDefault();

        if (event.deltaY > 0) {
            item.scrollLeft += item.clientWidth;
        }
        else {
            item.scrollLeft -= item.clientWidth;
        }
    });
});