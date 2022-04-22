var num = 10;
var num1;
var num2 = new Object();
var num3 = 22.123456;

var num3a = num3.toFixed(2);
document.write("Typ zmiennej num jest :",typeof(num),"");
document.write("Typ zmiennej num1 bez przypisanej wartosci jest :",typeof(num1),"");
document.write("Typ zmiennej num1 = new object()\n :",typeof(num2),"");
document.write("NUM3 typ prymoitywny przeksztalcony wraperem na obiekt poprze metode tofixed(2) ma",num3a,"a przed ", num3);
var num3 = new Array(1,3,"tets",true);
document.writeln("Dynamiczne typowanie num3 jest teraz tablica ", num3, "typ ->",typeof(num3));
//
let liczba = 1;

document.write("Typ zmiennej LICZBA jest : ->",typeof(Liczba),"");

let liczba2 = 323.3232;

var obj = new Number(liczba2);

let obj = {
    a: "tekst",
    b: 2,
    c: function test(){console.log("hej", this.b)}
}

console.log(obj.c(), typeof(obj));