class Mobile{
      constructor(brand,price,color){
            this.brand=brand;
            this.price=price;
            this.color=color;
      }
      getBrand(){
           return this.brand;
      }
      setBrand(brand){
            this.brand=brand;
      }
      getPrice(){
           return this.price;
      }
      setPrice(price){
            this.price=price;
      }
      getColor(){
          return  this.color;
      }
      setColor(color){
            this.color=color;
      }
      printSpecification(){
            let spec=`Brand:${this.getBrand()}\nPrice:${this.getPrice()}\nColor:${this.getColor()}`
            console.log(spec +'\n')
      }
}
let mobile=new Mobile('Samsung',20000,'Grey');
mobile.printSpecification();
mobile.setPrice(15000);
mobile.setBrand('Apple');
mobile.setColor('Gold')
mobile.printSpecification('500');