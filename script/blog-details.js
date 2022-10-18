let query = window.location.search;

let id = query.split('id=')[1];

// Fetch posts fron jsonplaceholder for blogs
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(({ id, title, body }) => {
        let rand1 = Math.floor(Math.random() * 256);
        let rand2 = Math.floor(Math.random() * 256);
        let rand3 = Math.floor(Math.random() * 256);

        document.querySelector('.blogTitle').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
        document.querySelector('.author_name').innerHTML = 'Mohammad Rahi';

        document.querySelector('.blogImage').innerHTML = document.querySelector('.author_image').innerHTML = document.querySelector('.footer_author_image').innerHTML = '';

        document.querySelector('.blogImage').style.backgroundColor = `rgb(${rand1} ${rand2} ${rand3})`;
        document.querySelector('.author_image').style.backgroundColor = `rgb(${rand3} ${rand1} ${rand1})`;

        document.querySelector('.footer_author_image').style.backgroundColor = `rgb(${rand2} ${rand1} ${rand2})`;
    })
    .catch(err => {

    });