function generateNumber() {
  // generate a random integer(hint : Math.random)
 let numberDiv= document.getElementById("number")

  let rendom_num=Math.floor(Math.random()*101)+1;
  numberDiv.textContent=rendom_num;
  checkOddEven(rendom_num);
}

function checkOddEven(num) {
  let oddevenDiv= document.getElementById("odd-even")
  if(num%2==0){
   
    oddevenDiv.textContent= "The number is even";
  }else{

    oddevenDiv.textContent= "The number is odd";

  }



  // logic for even / odd
}

window.onload = function () {
  let btn= document.getElementById("generate-number")
    btn.addEventListener("click",function(){
    
      generateNumber()
  })
  // add event listeners to the button here
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
