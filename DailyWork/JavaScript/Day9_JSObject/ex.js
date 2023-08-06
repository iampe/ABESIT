// Cration of object using key-value pair
const student ={
    id:1,
    name: "Ram1"
};
console.log(student);

// Cration of object  using constructor
let obj =new Object();
obj.id=1;
obj.name="Ram2";
obj.branch="CSAI";
console.log(obj);

student.brach="CSAI";
console.log(student);


let obj2={};
console.log(obj2);

// Cration of object  using Object.create method
let new_obj= Object.create(student);
new_obj.name="Ram3";
console.log(new_obj.id);
console.log(new_obj.name);
console.log(new_obj);


// Cration of object  using Object.assign method
// Nested object
const nested ={
    id:1,
    name:"Ram1",
    address:{
        house_no:123,
        city:"basti",
    }
};
console.log(nested);

// Cration of object with method

const obj3 ={
    id:1,
    name:"Ram4",
    address:{
        house_no:123,
        city:"basti",
    },
    info:function(){
        return "Welcome "+this.name;
    },
};

console.log(obj3.info());

