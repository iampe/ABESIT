const student ={
    id:1,
    name: "Ram1"
};

console.log(student);


// for (let key of student ) console.log(key);
// How to accses value using key
for (let key in student ) console.log(student[key]);