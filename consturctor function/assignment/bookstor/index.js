

function Author(name,birthyear,nationlity){
   
    this.name= name
    this.birt=birthyear
    this.nationlity= nationlity

}

 

function Book(author,title,genre,price){
    this.title=title
    this.author= author
    this.genre=genre
    this.price=price
    
   
}
  
Book.prototype.getBookInfo = function(){

   
    
   
     console.log(this.title,this.author.name,this.author.birt,this.author.nationlity,this.genre,this.price)
    
}



let author=new Author("raj",1996,"indian")

let book1=new Book(author,"welcome to jungle","histroy",2999)

book1.getBookInfo()






