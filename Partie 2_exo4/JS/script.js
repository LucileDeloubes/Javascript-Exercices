var blocLine = document.getElementById("blocLine");

window.addEventListener("load", function noscroll()
{
    
    document.getElementById('blocLine').style.visibility = "hidden";
     
})

window.addEventListener('scroll', function scrolldown()
 {
    var y = window.scrollY 
    if (y >= 50) {
        
        document.getElementById('blocLine').style.visibility = "visible";
        console.log(scrolldown);
    }
    else{
        document.getElementById('blocLine').style.visibility = "hidden"; 
    }
   
})
