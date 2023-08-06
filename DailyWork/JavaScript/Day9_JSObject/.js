function abc(){
    const x =document.getElementsByName("exampleRadios");
    if(document.getElementById('print').hasChildNodes()){
    document.getElementById('print').removeChild(document.getElementById('mydiv'));
    }
    const mydiv = document.createElement("div");
    mydiv.setAttribute('id',"mydiv");
    document.getElementById("print").appendChild(mydiv);
    for(let val of x){
        if(val.checked){
            // document.getElementById("print").innerHTML= val.value;
            for (let i = 1; i <=10; i++) {
            const y = document.createElement("p");
            y.innerText= val.value +" X "+ i +" = "+ i*val.value ;
            document.getElementById("mydiv").appendChild(y);
            }
        }
    }
}