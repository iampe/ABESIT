let m= new Map();
m.set("name","ram");
m.set("role",123);
m.set("age",89);
console.log(m);

for(let i of m){
    console.log(i);
}

for(let i of m.keys()){
    console.log(i);
}

for(let i of m.values()){
    console.log(i);
}

