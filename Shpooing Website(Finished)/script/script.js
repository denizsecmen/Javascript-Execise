var closehook=document.getElementById('close');
var carthook=document.getElementById('cart');
var shoppinghook=document.getElementById('shopping');
var mainhook=document.getElementById('main');
var cpanekhook=document.getElementById('cpanel');
var carthook=document.getElementById('cart');
var iconhook=document.getElementById('icon');
var panelhook=document.getElementById('panel');
var itemhook=document.getElementById('item');
var pricehook=document.getElementById('price');
var quotahook=document.getElementById('quota');
var reset=document.getElementById('reset');
var submit=document.getElementById('submit');
var urlhook=document.getElementById('url');
var content=document.getElementById('content');
var totalhook=document.getElementById('total');
var itemshook=document.getElementById('items');
var items=[];
var cart=new Array();
total=0;
function Item(name,price,quota,url)
{
    this.name=name;
    this.price=price;
    this.quota=quota;
    this.url=url;
}
function cartitem(name,price,amount,url,quota)
{
    this.name=name;
    this.price=price;
    this.amount=amount;
    this.url=url;
    this.quota=quota;
}
function render()
{
    itemshook.innerHTML='';
    for(i of cart)
    {
        var element=document.createElement('div');
        element.innerHTML="<p class='test'>"+i.name+'  Amount:'+i.amount+"</p><p id='pric'>"+i.price+"$</p>";
        element.addEventListener('click',removecart.bind(element,i));
        itemshook.appendChild(element);
        element.classList.add('tess');
    }
}
function removecart(obj) 
{
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].name==obj.name && cart[i].amount==1)
        {
            this.remove();
            cart.splice(i,1);
            total-=parseInt(obj.price);
            totalhook.innerHTML=total+'$';
            render();
            return;
        }
        else if(cart[i].name==obj.name)
        {
            cart[i].amount-=1;
            total-=parseInt(obj.price);
            totalhook.innerHTML=total+'$';
            render();
            return;
        }
    }
}
function cartAdd(id,price,url,quota)
{
    for(i of cart)
    {
        if(i.name==id)
        {
            if(i.amount==i.quota)
            {
                alert('Out of quota!!');
                return;
            }
            i.amount+=1;
            render();
            total+=parseInt(price);
            totalhook.innerHTML=total+'$';
            return;
        }
    }
    var item=new cartitem(id,price,1,url,quota);
    cart.push(item);
    total+=parseInt(price);
    totalhook.innerHTML=total+'$';
    render();
}
closehook.addEventListener('click',()=>{
    shoppinghook.style.width='0%';
    mainhook.style.width='100%';
})
carthook.addEventListener('click',()=>{
    shoppinghook.style.width='15%';
    mainhook.style.width='100%';
})
iconhook.addEventListener('click',()=>
{
 panelhook.style.display='none';
});
cpanekhook.addEventListener('click',()=>
{
 panelhook.style.display='block';
});
reset.addEventListener('click',()=>{
    itemhook.value='';
    pricehook.value=0;
    quotahook.value=0;
    urlhook.value='';
})
submit.addEventListener('click',()=>{
    var element=document.createElement('div');
    element.classList.add('item');
    for(i of items)
    {
        if(i.name==itemhook.value)
        {
            alert("can't add same item twice");
            return;
        }
        if(i.name.trim()=='')
        {
            alert('Please enter the name!');
        }
    }
    element.setAttribute('id',itemhook.value);
    element.addEventListener('click',cartAdd.bind(this,itemhook.value,pricehook.value,urlhook.value,quotahook.value));
    element.innerHTML="<img src='"+urlhook.value+"' alt='Failed to load image'><p>Item name:"+itemhook.value+"<p>Item price:"+pricehook.value+"$</p>";
    var item=new Item(itemhook.value,pricehook.value,quotahook.value,urlhook.value);
    items.push(item);
    content.appendChild(element);
});
