// How to pass function as a parameter

// function 1
const x = function (name){
    return ("Good Morning");
}

// function 2
const y = function (name){
    return ("Good Afternoon");
}


// function 3
function abc (fun,name){
    console.log(fun()+ " " + name);
}
abc(x,"Abhay");
abc(y,"Abhay");


// function passing as a object
function abcdef (fun,name){
    console.log(fun+ " " + name);
}
abcdef(x,"Abhay");
abcdef(y,"Abhay");