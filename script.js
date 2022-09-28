const navBar = document.getElementById('navSection')[0]
const header = document.getElementsByClassName('header')[0]
 

// Function that enables scrolling functionality for navigation
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY>20)

})


