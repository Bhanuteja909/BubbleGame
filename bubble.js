var timer=60;
var scorecount=0;
var temp=0;

function makeBubbles()
 {
    var bubbleStoring="";
        for(var i=1;i<=78;i++)
        {
            var a=Math.floor(Math.random()*10)
            bubbleStoring+=`<div id="kk" class="bubble">${a}</div>`;//backticks '' used for adding dynamic values where as "" cannot add dynamic values althought both used for storiung stroings
        }
document.querySelector("#pannelbottom").innerHTML=bubbleStoring;
 }
function runtimer()
{
    var count=setInterval(function()
    {
       if(timer>0)
       {
        timer--;
        document.querySelector("#clocktimer").textContent=timer;
       }
       else
       {
        clearInterval(count);
        document.querySelector("#pannelbottom").innerHTML=`<h2>Game Over <br> score: ${scorecount}<h2>`;
       }
    }, 1000);
    
}
function hitvalue()
{
      temp=Math.floor(Math.random()*10)
    document.querySelector("#hitbutton").textContent=temp;
}
function score(){
 scorecount+=10;
document.querySelector("#scorevalue").textContent=scorecount;
}
//concept:when any element is clicked is searches for 
//event listener if not fount it searchs at parent element and goes on
document.querySelector("#pannelbottom").addEventListener("click",function(details){

 var clickednumber=Number(details.target.textContent);
 if(temp===clickednumber)
 {
    score();
    makeBubbles();
    hitvalue();
 }
 
 
    
});
 
hitvalue();
runtimer();
makeBubbles();