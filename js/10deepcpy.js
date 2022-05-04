let obj = {
    imie:"Marek",
    numbers:[47,3234],
    flag:true,
    data:new Date(2022, 09  ,11),
    plus:{
            adres:"Tychy",
            numStreet:12,
        }
}
var reault = deepCopy(obj);

function deepCopy(objPassing){
    var copy;
    if(obj===null || typeof objPassing !=="object")
        return obj;
    if(objPassing instanceof Date){
        copy = new Date();
        copy.setTime(objPassing.getTime());
        return copy;
    }
    if(objPassing instanceof Array){
        copy= [];
        for(let i =0; i<objPassing.length;i++){
            copy[i] = deepCopy(objPassing[i]);
        }
        return copy;
    }   
    //sprawdzam czy jest obiketem
    if(objPassing instanceof Object){
        copy={};
        for(key in objPassing){
            console.log(key + " " + objPassing[key])
            copy[key] = deepCopy(obj[key]);
        }
        return copy;
    }

}
console.log(reault);