document.querySelectorAll('.serivce_tabs .tab').forEach(item => {
    item.addEventListener('click', () => {

        document.querySelector('.serivce_tabs .active').classList.remove('active');

        item.classList.add('active');
    });
});

const openTab = (target) => {
    document.querySelectorAll('.tab_itmes').forEach(item => {
        item.style.display = "none";
    })

    document.querySelector(target).style.display = "grid";
}

document.querySelectorAll('.faq_title').forEach(btn => {
    let isActive = false;

    btn.addEventListener('click', () => {

        document.querySelectorAll('.faq_content.active').forEach(item => {
            item.classList.remove('active');
        });

        if (isActive) {
            btn.nextElementSibling.classList.remove('active');
            isActive = false;
        }
        else {
            btn.nextElementSibling.classList.add('active');
            isActive = true;
        }

    });
});