 console.log("Hi")
var navbar=document.getElementsByTagName('div')[2]
var cont=document.getElementsByTagName('div')[0]

// navbar.addEventListener('click', function () {
   
//     navbar.style.top="0"
// })

document.addEventListener('scroll', function () {
    console.log(window.scrollY)
   
        if (window.scrollY<50) {
        navbar.style.top = "40"
      
    }
         else {
             navbar.style.top="0"
    }
        
    })
