

  function nikeproductCF(n,p){
    this.name=n;
    this.price=p
  }


  

  let arr=[]
function NikePro(e){
    e.preventDefault()
 let form= document.getElementById("product_form")
 let name= form.name.value
 let price=form.price.value

   
 let prod=new  nikeproductCF(name,price)



 arr.push(prod)
console.log(arr)
}