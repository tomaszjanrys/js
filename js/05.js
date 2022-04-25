/* Array */

/* Create array through constructor*/
var tab1 = new Array(11,33,"33",null);
var tab2 = Array("marek", "anita", [1,1]);

/* Literal */
var a = [1,2,3,4,5,6,7,8];

console.log(tab1,tab2, a);

/* warrning one argument created five empty element*/
var tab3 = new Array(5);
//fixed 

console.log(tab3);
var tab3a = Array.of(5);
console.log("Fixed ->",tab3a);
/* 

push or lenght
*/
var tab4 = new Array(11,33,"33",null);
var tab5 = Array("marek", "anita", [1,1]);

var resultPush= tab4.push(tab5,1,1,1,1);


tab4[tab4.length] = "Elemeemnt Added through lenght";
console.log(resultPush, tab4);
console.log("delete last items ", tab5.length=1 , "Teraz jest ", tab5);

/* 
delete 
*/
var tab6 = new Array(11,33,"33",null);
var tab7 = Array("marek", "anita", [1,1]);
delete tab6[tab6.length-1];
console.log("delete :",tab6, 3 in tab6);

/* 
FILL

*/
var tab7 = new Array(10).fill("marek");
console.log("Wypenienie tablicy slowem marek ", tab7);

/* 
loop for
*/

for(let i=0;i<tab7.length;i++)
{
 
    var num = tab7[i];
    console.log(i,num);
}
/* 

forEach
*/

tab7.forEach
(
    function(item, index, array)
    {
        console.log(item , index, array);
    }
);

/* 
concat
*/
var tab8 = new Array(11,33,"33",null);
var tab9 = Array("marek", "anita", [1,1]);

var c = tab8.concat(tab9);

console.log("Concat",c);

/* 

join reverse
*/
var x1 = [1,2,3,4,5,6,];
var x2 = ["a","b","c"];
var res = x1.join("--join--")
var res2 = x2.reverse();
console.log(res);
console.log("reverse zmiena orginalna tablice", x2, "po reverse",res2);

/* 
push 
*/
 x1.push("x","y");
console.log(x1);

/*  
pop
*/
var y1 = [1,2]
var resx = y1.pop();
console.log("Pobieram ostani ellement",resx, "po pobraniu tablica wyglada tak ", y1);

/* 
Shift pobiera element z poczatku tablicy a UNSHIFT dodaje elementy do pocztaku tablicy 

*/

/* 
wyszukiwanie wartosci w tablicy 
indexOF

*/

var month = ["maj","wiecien","czerwiec","maj","wiecien","czerwiec"];
var resxx = month.indexOf("maj", 2);
var resxx2 = month[resxx];
console.log("szukana wartosc maj jest pod indexem nr", resxx, ":",resxx2);



