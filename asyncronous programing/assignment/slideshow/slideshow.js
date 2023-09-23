
let counter=0;




let running=false;
 let images;
 let img;
 
let id ;
function start(){
  images= JSON.parse(localStorage.getItem("images"))

 let container= document.getElementById("container")
    container.innerHTML=null
 img= document.createElement("img")

  img.src=images[counter]
  container.append(img)
  counter++


  if (running==false){
    running=true
  
    id=setInterval(function(){
        if (counter===images.length ){
          counter=0
        }
      
       img.src= images[counter]
      
      
      
       container.append(img)
       counter++
      
        },1000)
        
      
  }
   

}

 function pause(){
 running=false



 clearInterval(id)


 }


 function Next(){
   clearInterval(id)
    
   if(counter===images.length){
    counter=0
   }
   console.log(counter)

   img.src=images[counter]
   counter++
   
   container.append(img)


 }

 
 function Privious(){
    clearInterval(id)
     
    if(counter===0){
        running =true
      alert("no images")
    }
     

    if(running==false){
        img.src=images[counter]
    counter--

    container.append(img)
    }
     
  
 
 
  }
 



