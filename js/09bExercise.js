var o = {}
var tab = []
var plane = {
    model:"f16",
    country:"usa",
    info:function()
    {
        console.log(`Model ${this.model} kraj ${this.country} rok ${this.year}`);

    }
}
plane.year= 1980;
plane.info(this.model, this.country, this.year);

function createObj(planeModel,planCountry, planeYear, planBrand)
  {
      return{
            model:planeModel,
            country:planCountry,
            year:planeYear,
            brand:planBrand,
            info:function()
                {
                    console.log(`${this.model}${this.country}${this.year}${this.brand}`)
                }
            }
  }

var a = createObj("f16","usa",1980,"Boing");
var b = createObj("Raptor","usa",2021,"nasa");
b.info();

/* 
construktor 
*/

var data = new Date(2021,12,22);
console.log(data.toDateString())
var arr = new Array(1,2,3)
console.log(arr.toString());


function Car(brand, year)
        {
            if((this instanceof Car)=== false)
            {
                return new Car(brand,year);
            }
            this.brand = brand,
            this.year =year,
            this.info = function()
                        {
                            console.log(`Marka ${this.brand} rok ${this.year}`);
                        }
        }

let car1 = new Car("WV",1987)
let car2 = Car("WV",1987)

car1.info()
console.log(car2 instanceof Car)

/*  

Object create
prototy[]
prototyp umozliwia stwozenie dziedziczniea 
a i b sa w prototypie 
*/
var obj =  Object.create
                (
                    {
                        a:1,
                        b:2
                    }
                )
console.log("Pusty object bo wlasciwosci sa w proto  " ,obj);
console.log("Prototyp " ,obj.__proto__);
console.log(obj.a);
/* 

*/

console.log(car1["year"] ,car1["brand"] , car1["color"])
//przypoisanie nowej wlasciwosci 
var color = "color";
car1[ color] = "red"
console.log("color" in car1);
car1.info()
console.log(car1["color"])
/* 
czy w obiekcie istnie jaka s wlasciwosc
*/
if(car1.hasOwnProperty("color")) console.log("it is");