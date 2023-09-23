

let display= document.getElementById("stopwatch")
 let second=0
 let timer=null
 let running=false;
function start(){
     if(running==false){
      running=true
    timer=  setInterval(stopwatch,1000)
     }
}




function pause(){
    running=false
   
    clearInterval(timer)



}



function reset(){
  running=false
   clearTimeout(timer)
   second=0
   display.innerHTML=0
   
}



function stopwatch(){
   second++

   display.textContent=second
}