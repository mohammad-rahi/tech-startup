// Fetch photos fron jsonplaceholder for blogs
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.blog_wrapper').innerHTML = '';
        data.slice(0, 2).map(photo => {
            let blog = `<div class="blog">
            <figure style="background-image: url('${photo.url}');" class="blog_image"></figure>
            <div class="blog_info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore cumque sed placeat architecto eius asperiores modi maxime, accusamus autem ratione earum consectetur, laudantium error quis, illo cum quaerat culpa...</p>
                <a href="./blog-details.html?id=${photo.id}" class="btn">Read more <svg
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
        document.querySelector('.blog_wrapper').innerHTML = `<div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>`;
    });

// Fetch posts fron jsonplaceholder for blogs
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.recent_blog_wrapper').innerHTML = '';
        data.slice(0, 6).map(({ id, title, body }) => {
            let rand1 = Math.floor(Math.random() * 256);
            let rand2 = Math.floor(Math.random() * 256);
            let rand3 = Math.floor(Math.random() * 256);

            let description;

            if (body.length > 250) {
                description = body.slice(0, 250);
            }
            else {
                description = body;
            }

            let blog = `<div class="blog">
            <figure style="background-color: rgb(${rand1} ${rand2} ${rand3});" class="blog_image"></figure>
            <div class="blog_info">
                <p>${description} <a href='./blog-details.html?id=${id}' class='read_more_link'>... Read more</a></p>
            </div>
        </div>`;

            document.querySelector('.recent_blog_wrapper').innerHTML += blog;
        })
    })
    .catch(err => {
        document.querySelector('.recent_blog_wrapper').innerHTML += `<div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>`;
    });