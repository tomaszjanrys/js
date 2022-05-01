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