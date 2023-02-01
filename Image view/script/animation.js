const images=['a.jpg','b.jpg','c.jpg','d.jpg'];
const bubbles=['a','b','c','d'];
var current=0;
let counter=0;
function showImages(image,counter)
{ 
 current=parseInt(counter);
 document.querySelector('#screen').src="./images/"+image;
}
function bubbless()
{
 for(bubble of bubbles)
 {
    console.log(bubble);
    document.getElementById(bubble).addEventListener('click',showImages.bind(this,bubble+".jpg",counter));
    counter+=1; 
}
}
bubbless();
document.querySelector("#go ").addEventListener('click',function(){
    if(current>=0 && current<3)
    {
        current++;
        showImages(images[current],current);
    }
});
document.querySelector("#back").addEventListener('click',function(){
     if(current>=1 && current<4)
    {
        current--;
        showImages(images[current],current);
    }
});