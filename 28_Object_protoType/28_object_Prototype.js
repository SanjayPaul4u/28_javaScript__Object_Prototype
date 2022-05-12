console.log("Object Prototype");

// let obj2 = {//WE CAN'T CHANGE IT'S PROTO TYPE
//     name  : "Sanjay",
//     age : 19,
//     address : "westBengal"
// }
// console.log(obj2);

//-----------BUT WE CAN CHANGE THIS OBJECT'S PROTO TYPE BECAUSE IT IS CONSTRACTORS
function obj(givenName, givenAge){
    this.name = givenName;
    this.age = givenAge;
}
obj.prototype.getName = function(){
    return this.name;
}
obj.prototype.setName = function(newName){
    return this.name = newName;
}
let obj2 = new obj("Ricky", 19);
console.log(obj2);
console.log(obj2.getName());
console.log(obj2.setName("Rohan das"));
console.log(obj2);//it will change because of setName.
console.log(obj2.toString());//not will be throw error

