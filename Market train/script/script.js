function item(name,price,url)
{
    this.name=name;
    this.price=price;
    this.url=url;
    this.id=Math.random;
    this.quota=2;
    this.greet=()=>
    {
        console.log('Hello');
    }

}
var chart=[];
var total=0;
var leftsidehook=document.getElementById('leftside');
var additemhook=document.getElementById('additem');
var resethook=document.getElementById('reset');
var inputhooks=document.querySelectorAll('#price > input');
var listhook=document.getElementById('list');
function remove_Cart(pricet){
    total-=pricet;
    var price=document.getElementById('total');
    price.innerHTML=total;
    i.quota+=1;
    this.remove();
};
function add_cart(price,name,objref)
{
    for(items of chart)
    {
        if(items.name==name)
        {
            if(items.quota==0)
            {
                alert("Out of quota!!");
                return;
            }
            items.quota-=1;
        }
    }
    total+=price;
    var listelement=document.createElement('li');
    listelement.textContent=name+"    "+price+"$";
    listelement.addEventListener('click',remove_Cart.bind(listelement,price,objref));
    listhook.appendChild(listelement);
    var price=document.getElementById('total');
    price.innerHTML=total;

}
function render()
{
leftsidehook.innerHTML='';
for(i of chart)
{
    var element=document.createElement('div');
    element.addEventListener('click',add_cart.bind(element,i.price,i.name,i));
    element.innerHTML='<p>Name:</p><p>'+i.name+"</p><p>Price:</p><p>"+i.price+"$</p><br><img src="+i.url+" alt='failed to load'>"
    element.classList.add('classitem');
    leftsidehook.append(element);
}
}
additemhook.addEventListener('click',()=>{
    if(inputhooks[1].value.trim()=='' ||inputhooks[0].value.trim()=='' || inputhooks[2].value.trim()=='')
    {
        alert("Please fill all empty textareas!");
        return;
    }
    if(isNaN(inputhooks[1].value))
    {
        alert("Please enter number to price section");
        return;
    }
    for(i of chart)
    {
        if(inputhooks[0].value==i.name)
        {
            alert('Can add Same element twice!!');
            return;
        }
    }
    var element=new item();
    element.name=inputhooks[0].value;
    element.price=parseInt(inputhooks[1].value);
    element.url=inputhooks[2].value;
    element.greet();
    chart.push(element);
    render();
    alert('Submitted!!');
})
resethook.addEventListener('click',()=>{
    for(input of inputhooks)
    {
        input.value="";
    }
})