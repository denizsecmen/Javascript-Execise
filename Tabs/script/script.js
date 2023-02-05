navbarHook=document.getElementById('navbar').children;
console.log(navbarHook);
currelement='DublinC';
for(element of navbarHook)
{
    element.addEventListener('click', function (){
       document.getElementById(currelement).style.display='none';
       document.getElementById(currelement.slice(0,-1)).classList.remove('activediv');
       currelement=this.id+'C';
       document.getElementById(this.id+'C').style.display='block';
       document.getElementById(currelement.slice(0,-1)).classList.add('activediv');
    })
}
