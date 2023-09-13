
 //normal function






/*function NikeProduct(n, p) {
    let Product = {};

    Product.name = n;
    Product.price = p;

    return Product;
  }

  let res = NikeProduct("shoes", 1200);
  console.log(res);// */

 


  // constructor function


  function NikeProductCF(n,p){



    this.name=n;
    this.price=p;
  }

  let pro2= new NikeProductCF("jorden",1200)
  console.log(pro2)