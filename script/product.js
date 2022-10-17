// Fetch prodcuts from fake prodcuts api
fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(products => {
        let productIndex = 12;

        document.querySelectorAll('.more_products').forEach(item => item.innerHTML = '')
        document.querySelectorAll('.scrollable_products').forEach(item => item.innerHTML = '')
        document.querySelector('.product_btn').classList.add('active');

        let electronicsProducts = products.filter(product => product.category.name === "Electronics");

        electronicsProducts.slice(0, 8).map(product => {
            let title;
            if (product.title.length > 20) {
                title = `${product.title.slice(0, 20)}...`;
            }
            else {
                title = product.title;
            }

            let productItem;
            if (product.images[0]) {
                productItem = `<div class="product_card">
                <h3 class="product_title">${title}</h3>
                <a href="./product-details.html?id=${product.id}"><figure class="product_photo" style="background-image: url('${product.images[0]}')"></figure></a>
                <div class="prduct_price_ratings">
                    <p><strong>Price: $</strong>${product.price}</p>
                    <p><strong>Ratings: </strong>
                        <span class="product_ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </span>
                    </p>
                </div>
    
                <a href="./product-details.html?id=${product.id}" class="shop_now">Shop now</a>
            </div>`;
            }
            else {
                productItem = `<div class="product_card">
                <h3 class="product_title">${title}</h3>
                <div class="broken_image"></div>
                <div class="prduct_price_ratings">
                    <p><strong>Price: $</strong>${product.price}</p>
                    <p><strong>Ratings: </strong>
                        <span class="product_ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </span>
                    </p>
                </div>
    
                <a href="javascript:alert('Currently unvailable!')" class="shop_now">Shop now</a>
            </div>`;
            }

            document.querySelectorAll('.more_products')[0].innerHTML += productItem;
        })

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

        document.querySelector('.product_btn').addEventListener('click', () => {
            productIndex += 4;

            electronicsProducts.slice(8, productIndex).map(product => {
                let title;
                if (product.title.length > 20) {
                    title = `${product.title.slice(0, 20)}...`;
                }
                else {
                    title = product.title;
                }

                let productItem;
                if (product.images[0]) {
                    productItem = `<div class="product_card">
                    <h3 class="product_title">${title}</h3>
                    <a href="./product-details.html?id=${product.id}"><figure class="product_photo" style="background-image: url('${product.images[0]}')"></figure></a>
                    <div class="prduct_price_ratings">
                        <p><strong>Price: $</strong>${product.price}</p>
                        <p><strong>Ratings: </strong>
                            <span class="product_ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>
                        </p>
                    </div>
        
                    <a href="./product-details.html?id=${product.id}" class="shop_now">Shop now</a>
                </div>`;
                }
                else {
                    productItem = `<div class="product_card">
                    <h3 class="product_title">${title}</h3>
                    <div class="broken_image"></div>
                    <div class="prduct_price_ratings">
                        <p><strong>Price: $</strong>${product.price}</p>
                        <p><strong>Ratings: </strong>
                            <span class="product_ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>
                        </p>
                    </div>
        
                    <a href="javascript:alert('Currently unavailable!')" class="shop_now">Shop now</a>
                </div>`;
                }

                document.querySelectorAll('.more_products')[1].innerHTML += productItem;
            })

        });
    })
    .catch(err => {
        document.querySelector('.product_btn').classList.remove('active');

        // document.querySelectorAll('.blog_wrapper')[0].innerHTML = `<div class="product_card_skeleton"></div>
        // <div class="product_card_skeleton"></div>
        // <div class="product_card_skeleton"></div>
        // <div class="product_card_skeleton"></div>>`;

        // document.querySelectorAll('.scrollable_products')[0].innerHTML = `<div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>
        // <div class="scrollable_product_skeleton"></div>`
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