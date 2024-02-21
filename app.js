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

// let getjoke=()=>{
//     fetch(url)
//     .then(data=>data.json())
//     .then(item=>{
//         jokecontainer.textContent=`${item.joke}`}
//         )
// }
// btn.addEventListener("click",getjoke);
// getjoke();


// let url1="https://icanhazdadjoke.com/slack"
//  async function getjoke(){
//     try{
//         let res=await fetch(url1);
//         let data=await res.json();
//         console.log(data.attachments[0].fallback);
//         // data.attachments[0].fallback
//         jokecontainer.textContent=  data.attachments[0].fallback;
//     }
//     catch(e){
//         console.log("error",e)
//     }  
// }
// btn.addEventListener("click",getjoke);
// getjoke();

// let url="https://api.chucknorris.io/jokes/random";
// async function getjoke(){
//     try{
//         let res=await fetch(url);
//         let data= await res.json();
//         // console.log(data);
//         console.log(data.value);
//         jokecontainer.textContent=data.value;
//     }catch(er){
//         console.log("error ->",er);
//     }
// }
// btn.addEventListener("click",getjoke)
// getjoke();