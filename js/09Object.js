function Car(brand="karton", model="trabant", year=2)
{
this.brand = brand;
this.model = model;
this.year = year;
}




var newCar = new Car();

console.log(newCar["brand"]);

function Person(name,age, data)
{
    if((this instanceof Person) === false)
    {
        return new Person(name,age, data);
    }
this.name = name;
this.age = age;
this.data = data;
this.test =function ()
    {
        if(this.age <=18){
            console.log(`user jest nie pelnoletni i ma ${this.age} lat`);
        }else{
        console.log("Jest ok ma  lat " + this.age + this.data);
       
        }
    }
}
var data = new Date();

var newPerson = new Person("tomek", 122, data.getHours())

newPerson.test(); 


