const jokecontainer=document.querySelector("#joke");
let btn=document.querySelector("#btn");
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


async function getjoke(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        jokecontainer.textContent=data.joke;
    }
    catch(e){
        console.log("error",e)
    }  
}
btn.addEventListener("click",getjoke);
getjoke();

