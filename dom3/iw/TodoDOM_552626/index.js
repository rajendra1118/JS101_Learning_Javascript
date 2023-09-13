

document.querySelector("form").addEventListener("submit",toDoApp)


function toDoApp(event){
    let taskArr=[];
   event.preventDefault();
   let taskName= document.querySelector("#task").value;
   let priority= document.querySelector("#priority").value;
   
   let taskObj={
    task:taskName,
    priority:priority,

   }

   taskArr.push(taskObj)
   
  taskArr.forEach(function(elem){
    
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=elem.task;
    let col2=document.createElement("td");
    col2.innerText=elem.priority;
      if(elem.priority=="High"){
        col2.style.backgroundColor="red"
      }else{
        col2.style.backgroundColor="green"
      }
    let col3=document.createElement("td");
    col3.innerText="Favourite"
     col3.addEventListener("click",function(){
        
     })

    row.append(col1,col2,col3)

  document.querySelector("tbody").append(row)


  })
}

