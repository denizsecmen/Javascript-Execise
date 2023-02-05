var vertab=document.getElementById('vertab').children;
var contenthook=document.getElementsByClassName('t');
currelement='LondonC';
document.getElementById(currelement).style.display='block';
function randata(element)
{
document.getElementById(currelement).style.display='none';
document.getElementById(currelement.slice(0,-1)).classList.remove('active');
document.getElementById(element.id).style.display='block';
currelement=element.id;
document.getElementById(element.id.slice(0,-1)).classList.add('active');
}
for(var i=0;i<vertab.length;i++)
{
    vertab[i].addEventListener('click',randata.bind(this,contenthook[i]));
}