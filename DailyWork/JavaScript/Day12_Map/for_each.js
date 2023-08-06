let m= new Map();
m.set("name","ram");
m.set("role",123);
m.set("age",89);
console.log(m);
m.forEach(
    (v,k)=>{
        console.log(v+" : "+k);
    }
);

