x = Number.MIN_SAFE_INTEGER
x1 = Number.MAX_SAFE_INTEGER

x2 = 10;
x2a = "Js";
x2b = Object;
x2c = x[2]
x2d = {
    a:1,
    b:3
} 
x2e = 0/2;
x2f = Math.sqrt(-1);
x2g = parseInt("ddd");

console.log("Minimalna warotsc :",x, "Max bezpieczna wartosc",x1);
console.log(`Czy  ${x2} jest NaN, ${isNaN(x2)} czy ${x2a} jest NaN ${isNaN(x2a)} Czy ${x2b} jest NaN ${isNaN(x2b)}`);
console.log(`Czy Array ${x2c} jest NaN ${isNaN(x2c)}` );
console.log(`Czy object ${x2d} jest NaN ${isNaN(x2d)}` );
console.log(`Czy  ${x2e} jest NaN ${isNaN(x2e)}` );
console.log(`Czy Math.sqrt(-1) zwraca  ${x2f} ` );
console.log(`Czy parseInt("ddd")  czy jest NaN ${isNaN(x2g)} ` );
/* infinity */
console.log(`Czy ${x2} jest infinity ${isFinite(x2)}`);
console.log(`Czy ${x2b} jest infinity ${isFinite(x2b)}`);
console.log(`Czy Math.sqrt(-1); jest infinity ${isFinite(x2f)}`);

y1 = "32232.3232332fdfsd232";
console.log(` string ${y1} parse Float i toFixed(2) -> ${parseFloat(y1).toFixed(2)}`);
y2 = 2.05 * 100;
y3 = Math.round(2.05 * 100);

console.log(`Blad przy zaokragleniu 2.05 * 100 =  ${y2} `);
console.log(`poprawne zaokraglenie Math.round(2.05 * 100) = ${y3} `);
/* Typ number oraz Obiekt Numebr */

let num = 10;
console.log(typeof num);
let obj =  new Number(3232);
console.log(typeof obj);
console.log(obj.toPrecision(5))
console.log(num.valueOf())