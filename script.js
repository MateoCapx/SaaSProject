const navBar = document.getElementById('navSection')[0]
const header = document.getElementsByClassName('header')[0]
 

// Function that enables scrolling functionality
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY>20)

})


//   const scrolled = window.scrollY;
//     if (scrolled > 20) {
//         header.classList.add('myStyle' )
//       console.log(scrolled)
//     }else{
//         console.log("note yet")
//     }
   
//     console.log(scrolled)