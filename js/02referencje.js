//immutable

var obj = {a:33,b:"Today is fantastic time"}

let data = obj;

let data2 = obj;

data.a=434;
data2.b = "To jest referencja"

console.log(obj);

//mutable

var num = 22;

num2 = num;

console.log(`wartosc num ${num}`);
num2 ="nowa wartosc ";

console.log(`num :${num} num2 ${num2}`);
//przypisanie wartosci
var str = "lekcja"
//wyswietlenie wartosci pod indeksem 0
console.log(str[0]);

//proba przypisania nowej wartosci pod indeksem 0 
str[0]= "X"
console.log(str)

let num1 =10; num2=20;

function add1(num1, num2){
let num2a = num2;
 let result = num1 + num2;
 num2= num1+num2;
console.log(`Przekazanie przez wartosc num1 ${num1} + num2 ${num2a}  = ${result}`)
}

add1(num1,num2)
console.log(`Zmiene poza funkcja nie ulegaja zmiane poniwaz funkcja tworzy ich kopie w nowym miejscu w pamieci ${num1} i ${num2}`);

//przez referenvcje
//parametry sa referencja do tablic i obiketu zmiany zostatana dodane ktore zajda w srodku funkcji
function referencja(tab,objca)
{
    tab.push(323);
    objca.test="test";

}

let objca1 = 
{
    a: 1,
}
let tab1 = [2,42,4]

referencja(tab1,objca1);

console.log(tab1)
console.log(objca1)


