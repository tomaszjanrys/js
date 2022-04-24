let str1 = "java script";
console.log(`kod utf ${str1.charCodeAt(4)}`);

for(var i =0 ; i<str1.length;i++){
  console.log(`Kod UTF-16 ${str1.charCodeAt(i)}, = ${str1.charAt(i)}`);  
}

let txt = " Ala ma kota kot ma ale "


console.log(txt.indexOf("kot", 8));// wyszukuje slowa ma od 8 pozycji
console.log(txt.lastIndexOf("ma"));// wyszukuje slowa ma od konca 

if(txt.indexOf("ddd")==-1){
console.log("nie znalazlem slowa");
}
if(txt.indexOf("ma",1)>=0) console.log("jest");
/* 
REG
*/
let reg = /[@ ]/g;
let txt1 = "    ala ma kota  Ula nie Ma kota     ";

console.log("String orginalny",txt1.length);
console.log("String z trim",txt1.trim().length);//trim usowa bioala spacje
console.log(`wyrazenie reg ${reg} =  ${txt1.search(reg)}`);
if(txt.search(reg)<0){
    console.log("Mail musi posiadac @")
}

let slice = "0123456789";
console.log(`sliece(start , end) ${slice.slice(-2,7)}`);
//jesli -2 odlicza od konca dlugosci stringu 

console.log(`Substring =>${slice.substring(5)}`);
console.log(`Substring =>${slice.substring(5,2)}`);//5 liczb od 2 pozycju zwaraca od indexu
console.log(`Substr =>${slice.substr(5,2)}`);
/* 
SPLIt dzilei string i zapsiuje w posatci tablicy 
*/

let newstr = "Ala ma kota kot ma ale ale ula Nie ma juz KoTKA";
data= newstr.split(" ");
console.log(`Split => ${data.length} ---- ${typeof data}`);//tablica


/* 

REPLACE

*/

let txt11 = " Js to fajny jezyk";

rep = txt11.replace(/Js/i,"ASPNET"); // i umozlizwia wyszukanie nie zaleznie od wielkscio liter 

console.log(`Replece ${rep}`);

let txt111 = " Js to fajny Jezyk";

rep1 = txt111.replace(/[A-Z]/g,"ASPNET");;// zamienia wszystkie duze litery na podana wartosc w  " "

console.log(`Replece ${rep1}`);






