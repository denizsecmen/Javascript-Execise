var close=document.getElementById('close');
var elements=document.getElementsByClassName('element');
var filterhook=document.getElementById('filter');
var filthook=document.getElementById('filt');
var sidebarhook=document.getElementById('sidebar');
var listhook=document.getElementById('list');
var contenthook=document.getElementById('content');
var show=document.getElementById('show');
var listel=new Array();
for(lst of listhook.children)
{
    listel.push(lst.id);
}
filterhook.addEventListener('click',function(){
    for(lst of listhook.children)
{
    lst.style.display='none';
}
for(ff of listel)
{
    if(ff.toUpperCase().includes(filthook.value.toUpperCase()))
    {
        document.getElementById(ff).style.display='block';
    }
}
});
close.addEventListener('click',()=>{
    sidebarhook.style.width='0%';
    contenthook.style.width='100%';

})
show.addEventListener('click',()=>{
    sidebarhook.style.width='20%';
    contenthook.style.width='80%';

})