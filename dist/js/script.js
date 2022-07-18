const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});


// window.addEventListener('click', function(e) {
//     if(e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove('hamburger-active')
//         navMenu.classList.add('hidden')
//     }
//     console.log(e.target)
//     console.log(hamburger)
// })

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const gotoTop = document.querySelector('#gotoTop');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        gotoTop.classList.remove('hidden')
        gotoTop.classList.add('block')
    } else {
        header.classList.remove('navbar-fixed')
        gotoTop.classList.remove('block')
        gotoTop.classList.add('hidden')
    }
})


const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
