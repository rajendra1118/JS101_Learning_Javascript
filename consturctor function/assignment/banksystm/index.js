

function BankAccount(accNo,name,type,balance){

   this.accNo=accNo,
   this.name = name,
   this.type=type,
   this.balance=balance
   this.active= true//all account is active  initial

}


BankAccount.prototype.deposite= function (amount){
  if(amount>0){
    this.balance+=amount;
    console.log(`deposited  ${amount}  new balance id ${this.balance}`)
  }else{
    console.log(`invilad deposite`)
  }

}

BankAccount.prototype.withdraw=  function (amount){
    if (amount>0 && this.balance>=amount && this.active==true){
        this.balance-=amount;
        console.log(`withdrawl ${amount} new balance ${this.balance}`)
    }else{
        console.log(`withdraw unsuccessful`)
    }
}


function totalBalance(accounts){

   let  total=0

   for(let acc of accounts){
    if(acc.active==true){
       total+=acc.balance
    }
   }
    return total
}
let arr=[]
function addAccount(accNo,name,type,balance){
 arr.push(new BankAccount(accNo,name,type,balance))

}


addAccount(123,"avc","saving",2999)
console.log(arr)
// let account1 =  new BankAccount(123,"abv", "saving",1050)
// let account2 =  new BankAccount(124,"abd", "saving",1050)
// let account3 =  new BankAccount(125,"abx", "saving",1050)
// let account4 =  new BankAccount(126,"abb", "current",1400)
 

console.log(totalBalance(arr))