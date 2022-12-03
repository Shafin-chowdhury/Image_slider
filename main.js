var photos = ["images/ll.jpg", "images/oo.jpg", "images/pp.png"];
var imgTag = document.querySelector("img");

var count = 0;
function next(){
count++;
if(count>=photos.length){
    count = 0;
    imgTag.src = photos[count];
}
else{
imgTag.src = photos[count];
}
}


function prev(){
    count--;
if(count>=photos.length){
    count = 0;
    imgTag.src = photos[count];
}
else{
imgTag.src = photos[count];
} 
}

