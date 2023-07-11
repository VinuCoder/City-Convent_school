burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.left_nav')
rightnav = document.querySelector('.right_nav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-nav-resp');
    leftnav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})