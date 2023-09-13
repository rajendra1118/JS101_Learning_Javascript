// fill in javascript code here

document.querySelector("form").addEventListener("submit",EmpRecord)


 
function EmpRecord(event){
    event.preventDefault()
  let dataArr=[];
   let employeName=document.querySelector("#name").value
   let employeID= document.querySelector("#employeeID").value
   let department= document.querySelector("#department").value
   let exp= document.querySelector("#exp").value
   let email= document.querySelector("#email").value
   let mobile= document.querySelector("#mbl").value
   


   

   let objData={
     name: employeName,
    employeeId:employeID,
    department:department,
    experince:exp,
    email:email,
    mobile:mobile,
   }

  dataArr.push(objData)

   
  
  dataArr.forEach(function(elem){

    let row= document.createElement("tr");

    let col1=document.createElement("td")
    col1.innerText=elem.name;
    let col2=document.createElement("td")
    col2.innerText=elem.employeeId
    let col3=document.createElement("td")
    col3.innerText=elem.department
    let col4=document.createElement("td")
    col4.innerText=elem.experince
    let col5=document.createElement("td")
    col5.innerText=elem.email
    let col6=document.createElement("td")
    col6.innerText=elem.mobile
    let col7=document.createElement("td")
    

    if(elem.experince >= 5){
        col7.innerText="Senior"
    }else if (elem.experince>2 && elem.experince<5){
        col7.innerText="Junior"
    }else if (elem.experince<=1){
        col7.innerText="Fresher"
    }



    let col8=document.createElement("td")
    col8.innerText="delete"
     col8.addEventListener("click", function(event){
       event.target.parentNode.remove();
     })

   
    row.append(col1,col2,col3,col4,col5,col6,col7,col8)

    document.querySelector("tbody").append(row)


  })




}