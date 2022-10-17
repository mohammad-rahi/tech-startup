const slugs = ["galaxy-fidget-spinner", "beats-solo3-wireless", "portable-speaker"];

const stockProducts = [
    {
        title: "Galaxy Fidget Spinner",
        slug: "galaxy-fidget-spinner",
        price: 9.99,
        images: [
            "./assets/images/product1.png",
            "./assets/images/Galaxy_Fidget_Spinner2.png",
            "./assets/images/Galaxy_Fidget_Spinner3.png",
        ],
        description: [
            "Wonderful fidget spinner swiping arcade",
            "Wide range of juicy colored spinners",
            "Chance to power your swiping skills up",
            "Amazing relaxing spinner atmosphere"
        ]
    },
    {
        title: "Beats Solo3 Wireless",
        slug: "beats-solo3-wireless",
        price: 270.49,
        images: [
            "./assets/images/product2.png",
            "./assets/images/Beats_Solo3_Wireless2.png",
            "./assets/images/Beats_Solo3_Wireless3.png"
        ],
        description: [
            "High-performance wireless noise cancelling headphones",
            "Compatible with iOS and Android devices",
            "Pure adaptive noise canceling (pure ANC) actively blocks external noise",
            "Real-time Audio calibration preserves a Premium listening experience"
        ]
    },
    {
        title: "Portable Speaker",
        slug: "portable-speaker",
        price: 38,
        images: [
            "./assets/images/product3.png",
            "./assets/images/Portable_Speaker2.png",
            "./assets/images/Portable_Speaker3.png"
        ],
        description: [
            "SUPER SOUND: This Bluetooth speaker has a huge stereo sound with 2 X 4-Inch Hi-Fi speakers, treble, bass and volume controls. This portable speaker can provide very powerful stereo and amazing bass sound. It will bring you an unprecedented listening experience.",
            "ENDLESS ENTERTAINMENT: The Sylvania bluetooth portable speaker has a long lasting rechargeable battery. It has a built-in 800mAh lithium battery. Charge the speaker quickly and easily with the USB charging cable.",
            "STYLISH: The wireless bluetooth speaker has the coolest blue LED lights around the speakers. You can enjoy the lights for home party, beach, camping or outdoor travel."
        ]
    }
];

let query = window.location.search
let productId = query.split("id=")[1];

if (slugs.includes(productId.toString())) {

    let { title, images, price, description } = stockProducts.find(product => product.slug === productId.toString());

    document.querySelector('.productDetails_title').innerHTML = title;
    document.querySelector('.productDetails_title_small').innerHTML = title;

    document.querySelector('.product_images').innerHTML = images.map(image => `<div><img src="${image}" onmouseover="imageFunction(this)" /></div>`).join("");

    document.querySelector('#productDetails_image').src = images[0];

    document.querySelector('#productDetails_image').classList.remove('loading_skeleton');

    document.querySelector('.productDetails_top').innerHTML = `
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


    document.querySelector('.productDetails_bottom').innerHTML = `<p class="font-bold">About this item</p>
    <ul class="list-disc">
    ${
        description.map(list => `<li>${list}</li>`)
    }
    </ul>`;
}
else {
    // Fetch prodcuts from fake prodcuts api
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then(res => res.json())
        .then(({ id, title, images, price, category, description }) => {
            document.querySelector('.productDetails_title').innerHTML = title;
            document.querySelector('.productDetails_title_small').innerHTML = title;

            document.querySelector('.product_images').innerHTML = images.map(image => `<div><img src="${image}" onmouseover="imageFunction(this)" /></div>`).join("");

            document.querySelector('#productDetails_image').src = images[0];

            document.querySelector('#productDetails_image').classList.remove('loading_skeleton');

            document.querySelector('.productDetails_top').innerHTML = `
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


            document.querySelector('.productDetails_bottom').innerHTML = `<p class="font-bold">About this item</p>
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
    document.querySelector('#productDetails_image').src = thisElement.src;
};

// Fetch prodcuts from fake prodcuts api
fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(products => {

        document.querySelectorAll('.scrollable_products').forEach(item => item.innerHTML = '');

        let electronicsProducts = products.filter(product => product.category.name === "Electronics");

        electronicsProducts.slice(0, 20).map(product => {
            let productItem;

            if (product.images[0]) {
                productItem = `<div class="scrollable_product" style="background-image: url('${product.images[0]}'); cursor: pointer;" onclick="window.location.href = './product-details.html?id=${product.id}'"></div>`;
            }
            else {
                productItem = `<div class="scrollable_product_skeleton"></div>`;
            }

            document.querySelectorAll('.scrollable_products')[0].innerHTML += productItem;
        })

        electronicsProducts.slice(20, 40).map(product => {
            let productItem;

            if (product.images[0]) {
                productItem = `<div class="scrollable_product" style="background-image: url('${product.images[0]}'); cursor: pointer;" onclick="window.location.href = './product-details.html?id=${product.id}'"></div>`;
            }
            else {
                productItem = `<div class="scrollable_product_skeleton"></div>`;
            }

            document.querySelectorAll('.scrollable_products')[1].innerHTML += productItem;
        })
    })
    .catch(err => {

        document.querySelectorAll('.scrollable_products').forEach(item => {
            item.innerHTML = `<div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>
            <div class="scrollable_product_skeleton"></div>`
        })
    });

const productScroll = (index, pos) => {
    if (pos === "left") {
        document.querySelectorAll('.scrollable_products')[index].scrollLeft += (document.querySelector('.scrollable_products').clientWidth - 100);
    }
    else {
        document.querySelectorAll('.scrollable_products')[index].scrollLeft -= (document.querySelector('.scrollable_products').clientWidth - 100);
    }
};

document.querySelectorAll('.scrollable_products').forEach(item => {
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