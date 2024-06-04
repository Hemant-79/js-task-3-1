document.addEventListener('click', function() {
    var red = Math.floor(255*Math.random())+1;
    var blue = Math.floor(255*Math.random())+1;
    var green = Math.floor(255*Math.random())+1;
    
   document.querySelector("body").style.backgroundColor = `rgb(${red},${green},${blue})`;
});