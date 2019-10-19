let btn = document.querySelector('.fa-search');
let searchbox = document.querySelector('.searchbox');

btn.addEventListener('click', () => {
    searchbox.classList.toggle('opened');
})
