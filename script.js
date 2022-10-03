const navBar = document.getElementById('navSection')[0]
const header = document.getElementsByClassName('header')[0]
 const playButton =document.getElementsByClassName('fa-solid')[0]

// Function that enables scrolling functionality for navigation
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY>20)
})

playButton.addEventListener("click",()=>{
    alert("This link will direct to a demo video")
})


let i = 0;
let txt = 'Lorem ipsum typing effect!'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

//The charAt() method returns the character at the specified index in a string.
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

