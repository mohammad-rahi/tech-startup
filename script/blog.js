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
    })
    .catch(err => {
        document.querySelector('.blog_wrapper').innerHTML += `<div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>
        <div class="blog_skeleton"></div>`;

    });