
function render(movieList)
{
    scrdeen.innerHTML="";
    for(newMovie of movieList)
    {
        movieDOM=document.createElement('div');
        movieDOM.addEventListener('click',deleteElement.bind(movieDOM,newMovie.moviename));
        movieDOM.innerHTML=newMovie.render;
        console.log(newMovie.render);
        scrdeen.appendChild(movieDOM);
    }
}
movies=new Array();
var hookclose=document.getElementById('close');
var modal=document.getElementById('modal');
var addMovie=document.getElementById('add-movie');
var movieurl=document.getElementById('movie-url');
var inputs=document.querySelectorAll('#modal-add > input');
var submithook=document.querySelector('#buttons').lastElementChild;
var resethook=document.querySelector('#buttons').firstElementChild;
var scrdeen=document.querySelector('#screen');
var filtering=document.querySelector('#filter');
var filterHook=document.querySelector('#filter-input');
console.log(submithook);
function deleteElement(movien)
{
    var t=confirm("Do you want to delete film?");
    console.log(movien);
    if(t)
    {
        for(var i=0;i<movies.length;i++)
        {
            if(movies[i].moviename==movien)
            {
                movies.splice(i,1);
            }
        }
        this.remove();
    }
}
hookclose.addEventListener('click',()=>{
    modal.style.display='none';
});
addMovie.addEventListener('click',
()=>{
    modal.style.display='block';
});
filterHook.addEventListener('click',()=>{
    var list=new Array();
    for(moviez of movies)
    {
        if(moviez.moviename.includes(filter.value))
        {
            list.push(moviez); 
        }
    }
    render(list);
});
submithook.addEventListener('click',function()
{
    for(i of movies)
    {
        if(i.moviename==inputs[0].value)
        {
            return;
        }
    }
    const movie={
        moviename:'',
        director:'',
        imageUrl:'',
        createLog:function()
        {
            console.log('Moviename:'+this.moviename.toString())
        }
        ,get render()
        {
            return '<div class="movieitem"><p>Movie name:'+this.moviename+'</p><p>Director:'+this.director+'</p><img src="'+this.imageUrl+'"></div>';
    
        }
    }
    var newMovie=movie;
    newMovie.moviename=inputs[0].value;
    newMovie.director=inputs[1].value;
    newMovie.imageUrl=inputs[2].value;
    movies.push(newMovie);
    render(movies);
});
resethook.addEventListener('click',function()
{
    for(input of inputs)
    {
        input.value='';
    }
});