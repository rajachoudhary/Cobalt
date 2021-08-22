var switchBox= document.querySelector('.switch-box');
var btn = document.querySelector('.switch-btn')



var count = 0;

btn.addEventListener("click", function (e) {
    count++
    console.log(count)
    e.preventDefault()
     if ( btn.style.float === "right") {
        btn.style.float = "left"
    }
    else {
        btn.style.float = "right"
    }
}
    )


