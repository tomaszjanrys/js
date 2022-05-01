if(window.innerWidth<1920)
{
    let x = window.innerWidth;
alert("zmieniles rozmiar okna"+ x);
}
function test()
{
    //uzycie strict zabespiecza przed przypadkowym brakiem var
    "use strict"
    var x =2;
    var y = 3 +x;
    console.log(y);
}
test();
{
    console.log("Blok")
}

if(1===1)
{
var x = "ok"
let xx = "let"
console.log(x+" "+xx);

}

//console.log("poza ifem"+x+xx);
var num =10;
//var zmienna globalna 
console.log(window.num);
let c =111;
console.log("c" in window);

