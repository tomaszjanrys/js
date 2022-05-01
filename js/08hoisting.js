console.log("Hoisting"+("n" in window)+ "Wartosc n to "+ n);
var n = 10;
console.log(n);


/* console.log("Hositing dla let "+("somelet" in window)+ "Wartosc some let to " + somelet);
let somelet = 10; */


/* test(); */

var x =function (){
    console.log("Wyraznie funkcyjne brak hoistingu");
}
x()

let xx =100;

function test2()
{
    xx =11;
   let  xx = 200;

   console.log("ok") 
}
test2()