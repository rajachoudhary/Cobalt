var ham = document.querySelector(".ham-menu")
var nav = document.getElementById('ham-list')

var sty=window.getComputedStyle(nav).getPropertyValue("display")
ham.addEventListener('click', function (e) {
    e.preventDefault()
    
    if (nav.style.display === "none") {
        nav.style.display="block"
    }
    else {
        
        nav.style.display="none"
    }
})