/*const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)*/

const menuEn = document.querySelector(".menu-list-en");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menuEn.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menuEn.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.up-arrow-btn');
    scroll.classList.toggle("active", window.scrollY > 250)
})