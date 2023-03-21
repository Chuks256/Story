let foxx=document.querySelector(".fox");
let monkeydom=document.querySelector(".monkey");
let natural=document.querySelector(".nature")
let foxxTxt=document.querySelector("h2")

window.onload=function(){
   window.setTimeout(()=>{
    monkeydom.style="clip-path:inset(0% 0% 0% 0%)"
   },1000)
}


window.addEventListener("scroll", ()=>{
  let scrollHeight=Math.floor(document.documentElement.scrollTop/18)/3;
  let top=Math.floor(scrollHeight)
  document.documentElement.style=`transform: translateY(${-top*2}%)`;
  let t=document.documentElement.scrollTop;
  if(t>239){
    foxx.style= 'clip-path:circle(100% at 50% 50%)';
  }
  else{
    foxx.style= 'clip-path:circle(30% at 50% 50%)';
  }
// nature animation 
if(t>460){
  natural.style='clip-path:inset(0% 0% 0% 0%)';
}
else{
  natural.style='clip-path:inset(0% 0% 100% 0%)';
}
})
 
  
