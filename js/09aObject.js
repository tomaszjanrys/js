var person = {
name:"tomek",
age:11,
obj:{
    pesel:1728782
    },
infoTest:function()
        {
            console.log(`Imie ${this.name} wiek ${this.age}`); 
        }   
}


person.infoTest();
console.log(person["name"]);
console.log(person.obj["pesel"]);

var carProduction =
{
    numProducedCar:0,
    carsArr:[],
    makeCar:function(barnd , model ,year)
            {
                var car = 
                {
                    barnd:barnd,
                    model:model,
                    year:year
                }
                //kazde wywolanie makecar zwiekszy numproducedCar
                this.numProducedCar++
                this.carsArr.push(car);
                return car
            },
    printStats:function()
                {
                    console.log(this.numProducedCar)
                }

}

var bmw = carProduction.makeCar("BMW","m5",2021);
var audi = carProduction.makeCar("Audi", "a2",1997);
console.log(carProduction.printStats());
console.log(carProduction.carsArr[0]);


var personShop = {
                    id:0,
                    personArr:[],
                    makePerson:function(name,phonNumber)
                                {
                                    var person = {
                                                    name:name,
                                                    phonNumber:phonNumber

                                                 }
                                                 this.id++;
                                                 this.personArr.push(person);
                                                 return person
                                },
                    printStats:function()
                                {
                                    console.log(`Osob w bazie jet ${this.id}`);
                                }
                 }
personShop.makePerson("tomek",32312321);
personShop.printStats();
for(let i =0;i<10;i++){
personShop.makePerson("x",111)
}
personShop.printStats();
console.log(personShop.personArr.length)

console.log(personShop.personArr.length)

/* 
Shop cart
*/
let shopCart =
            {
                //Shoping list
                items:[],
                add:function(name,price)
                    {
                        this.items.push(
                            {
                                name:name,
                                price:price
                            }
                        )
                    },
                printInfo:function()
                          {
                              let finalPrice = 0;
                              for(let i = 0;i < this.items.length;i++){
                                let element = this.items[i];
                                finalPrice += finalPrice + element.price
                                console.log(`nr ${i} W koszyku ${element.name} Cena : ${element.price}`);
                            }
                              console.log(`Wartosc zakupow : ${finalPrice}`);
                          },
                removeItems:function(i)
                            {
                                if(i >= this.items.length)return;
                                this.items.splice(i,1);
                            },
                exceendedSum:function()
                            {
                             let finalPrice = 0;
                             for(let i =0 ; i<this.items.length;i++){
                                let elemet = this.items[i];
                                finalPrice += finalPrice + elemet.price;
                                if(finalPrice>10000){
                                   while(finalPrice>10000){
                                     console.log("Przekroczyles limit usun produkt ");
                                    let remove = prompt("wpisz idex");
                                    this.items.splice(remove,1);
                                    break;
                                   }
                                }else{
                                    var allowed = 10000 - finalPrice;
                                    console.log(`nr zakupu ${i} Dostepne srodki ` + allowed);
                                }
                             
                             }  
                            }
            }
shopCart.add("MOnitor",644);            
shopCart.add("Myszka",120);            
shopCart.add("Klawiatura",321);            
shopCart.add("Rtx",3500);   
shopCart.add("Obudowa",4224)
shopCart.exceendedSum();
shopCart.printInfo();
shopCart.exceendedSum();
shopCart.printInfo();