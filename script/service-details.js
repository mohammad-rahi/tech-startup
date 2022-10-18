document.querySelectorAll('.serivce_tabs .tab').forEach(item => {
    item.addEventListener('click', () => {

        document.querySelector('.serivce_tabs .active').classList.remove('active');

        item.classList.add('active');

        if (item.classList.contains('tab2')) {
            document.querySelector('.tab_border').style.left = document.querySelector('.tab').clientWidth + "px";
        }
        else {
            document.querySelector('.tab_border').style.left = "0";
        }
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

const tabBorderWidth = () => {
    document.querySelector('.tab_border').style.width = document.querySelector('.tab').clientWidth + "px";

    if (document.querySelector('.tab2').classList.contains('active')) {
        document.querySelector('.tab_border').style.left = document.querySelector('.tab').clientWidth + "px";
    }
    else {
        document.querySelector('.tab_border').style.left = "0";
    }
};

window.addEventListener('resize', tabBorderWidth);
window.addEventListener('load', tabBorderWidth);