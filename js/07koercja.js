if(true) console.log("ok");
if("10" == String(10)) console.log("konwersja jawna");
if("10" - 5 ==5) console.log("konwersja  nie jawna");
if(Number("10") - 5 ==5) console.log("1 konwersja  Number (\"\\10\") - 5 ==5)  jawna");
if(parseInt("10s2dads") - 5 ==5) console.log("1 konwersja parseInt `10dsadd`  - 5 ==5)  jawna");
console.log(Boolean())
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(void 0))
console.log(Boolean(-0))
console.log(Boolean(0))
console.log(Boolean(Infinity))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(Number(!!!!!!!!!!!!0)))
console.log(Boolean(Boolean()))

let tab = new Array()
tab = [1,2,3,4].join("-")
console.log(tab+ "typ",typeof tab)

let obl = 2*4/2;
let tab2 = new Array();


for (var i =0 , j=0.0;i<20;i++, j++){
    let obl = (20 ) / (j);
    tab2.push(obl.toString());
    console.log("parse",parseFloat(j/10) ,i )
}
console.log(tab2)
tab2.forEach(
    function(item, index, array)
    {
        console.log(item +" rem", index  )
    }
)


