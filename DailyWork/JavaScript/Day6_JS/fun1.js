// first method to create function
function add(a,b){
    return a+b;
}

console.log(add(10,20));
console.log(add("ab", "cd"))

// second method to create function
const x=function(a,b){ return a+b;}
console.log(x(30,20));


const y= function (c,d){
    return c-d;
}

console.log(y(40,30));