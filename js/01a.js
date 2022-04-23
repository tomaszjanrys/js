let str = "ddd";
x = str.length;
let x1 = {
    a: "ok",
    b: function add1(num1,num2){
        console.log(num1 * num2);
    },
    c: function len(str){
        console.log(str.length);
    },
    k: function  kwadrat(num1)
    {
     console.log(num1*num1);   
    }


}

let dd;
let obj = {
    a: "tekst",
    b: 2,
    c: function test(){console.log("hej", this.b)},
 
}

console.log(obj.c(), typeof(obj));

console.log(x1.b(32,323));

console.log(x1.c("tomekgrh;h;bhrhbvh;rhfvh"))

if (false-true===-1){
    alert("prawda")
}else{
    alert("fausz")
}
console.log(`pole kwadratu ${x1.k(23232)}`);

let bol = "dsddsc";
console.log(obj.valueOf())

let obj1 = {
    1: "tekst",
    2: 2,
    3: function test(){console.log("hej", this.b)},
 
}

for (var dx = 0;dx<5;dx++){
console.log(obj1[dx]);
}

