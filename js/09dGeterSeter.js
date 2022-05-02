var person = {
    fname : null,
    lname : null,

    get fullName(){
        return this.fname + " " + this.name;
    },
    set fullName(newName){
        var splited =newName.split(" ");
        this.fname =splited[0];
        this.lname = splited[1]


    }
}

person.name="marek"
console.log(person)

/* 
wywwolanie setera
*/

person.fullName = "Ania kowalska";
console.log(person.fullName);