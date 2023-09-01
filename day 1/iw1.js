
arr = [3,4,5,6,7]

let res=""

arr.forEach(function(ele){
  if(ele%2==1){
    res+=ele+" - "
  }
})

 let resl=  res.slice(0,-2)


console.log(resl)