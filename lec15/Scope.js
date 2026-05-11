{
    var a=20
    let b=30
}
console.log(a); // output is 20 bcz it is declared with var
// console.log(b); //ReferenceError: b is not defined bcz it is declared with let or const

function sum() {//if any variable declared inside the fuction are not accessable
    let c=40
    var d=50
}
// console.log(c);//ReferenceError: c is not defined
//console.log(d); //ReferenceError: d is not defined

if(false){
   let e=60
    
}else{
    console.log("heeehee");
    
}
console.log(e);//ReferenceError: e is not defined
