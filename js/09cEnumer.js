var obj = {
            a:"Marek",
            b:113,
            c:[1,2,3,4,5]
          }

for(prop in obj)
    {
        if(obj.hasOwnProperty(prop)) console.log(prop + " : "+ obj[prop]); 
    }

/* 
wlasciwosci sa w prototypie 
brak enumeracji obiekt pusty dzieki hasOwnProperty
*/
var obj1 = Object.create ( {
        a:"Marek",
        b:113,
        c:[1,2,3,4,5]
      }
)

for(prop in obj1)
{
    if(obj1.hasOwnProperty(prop)) console.log(prop + " : "+ obj1[prop]); 
}
console.log(obj1.__proto__);

/* 
keys zwraca klucze danego obiektu  w tablicy 

*/
var kaysArr = Object.keys(obj);
console.log(kaysArr)
for(let i=0;i<kaysArr.length;i++){
    let name = kaysArr[i]
    console.log(name + " : "+ obj[name]);
    console.log(kaysArr[i])
}
var kaysArr1 = Object.values(obj);
console.log(kaysArr1)

/* 
entries pobiera pary kluczy do zmienej 
*/
let objENtries = Object.entries(obj)
console.log(objENtries)
for([key, value] of objENtries)
{
console.log("fo of =>"+key +" : " +value);
}

/* 

kloniwanie plytaka kopia gleboka
*/
//plytkie

var source = {a:10,b:20}
//bject.assign({},source) soutce zosaje skopiowanie do pustego objektu 
var result = Object.assign({},source)

console.log( source === result)

/* 


*/
var s1 = {str:"tomek",num:121,arr:[1,2,3,4,5,6,7,8,9], 
        date: new Date(2021 ,11 ,12 ), obj:{a:10,b:20,c:30}}
/* 
reprezentacja tesktowa 
serializacja danych
*/
var copy = JSON.stringify(s1);
console.log("JSON",copy)

/* 
spowrotem do obiektu 
*/
var copy = JSON.parse(JSON.stringify(source));
console.log("JSON",copy)