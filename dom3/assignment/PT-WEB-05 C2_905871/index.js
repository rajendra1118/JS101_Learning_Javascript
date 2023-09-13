// fill in javascript code here
//#name,#docID,#dept,#exp,#email,#mbl
document.querySelector("form").addEventListener("submit",MedicalData)

function MedicalData(event){
     event.preventDefault()
     let dataArr=[]
    let docName=document.querySelector("#name").value
    let docID= document.querySelector("#docID").value
    let department=document.querySelector("#dept").value
    let exp=document.querySelector("#exp").value
    let email= document.querySelector("#email").value
    let mobile= document.querySelector("#mbl").value

    let dataObj={
        Name:docName,
        ID:docID,
        dep:department,
        exp:exp,
        email:email,
        mobile:mobile
    }
   
    
 dataArr.push(dataObj)

   dataArr.forEach(function(elem){
   let row= document.createElement("tr")
   let col1=document.createElement("td")
   col1.innerText=elem.Name;
   let col2=document.createElement("td")
   col2.innerText=elem.ID
   let col3=document.createElement("td")
   col3.innerText=elem.dep
   let col4=document.createElement("td")
   col4.innerText=elem.exp
   let col5=document.createElement("td")
   col5.innerText=elem.email
   let col6=document.createElement("td")
   col6.innerText=elem.mobile
   let col7=document.createElement("td")
   
   if(exp > 5){
    col7.innerText="Senior"
   }else if (exp<=5 && exp>=2){
    col7.innerText="Junior"
   }else if (exp<=1){
    col7.innerText="Trainee"
   }
   let col8=document.createElement("td")
   col8.innerText="Delete"
   col8.style.backgroundColor="red"
   col8.addEventListener("click", function(event){
    event.target.parentNode.remove()
   })


  row.append(col1,col2,col3,col4,col5,col6,col7,col8)

  document.querySelector("tbody").append(row)

   })
}
