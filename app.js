const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const btn = document.querySelector('.menu');
const tabs = document.querySelector('.wrapper');
const tabBtn = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.toggle('open');
    btn.classList.toggle('open');
});

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if(id) {
        tabBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
}