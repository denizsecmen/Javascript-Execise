var title=document.getElementById('title');
title.addEventListener('click',function(){
var content=document.getElementById('content');
if(content.style.opacity==0)
{
    content.style.opacity=1;
}
else
{
    content.style.opacity=0;
}
});