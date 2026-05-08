let arr=[1,2,3,4,5,5]
console.log(arr.length, "length");
console.log(arr.push(6), "push");
console.log(arr.pop(),"pop");
console.log(arr.unshift(0),"unshift");
console.log(arr.shift(),"shift");
console.log(arr.includes(4),"includes");
console.log(arr.indexOf(5),"indexof");


//imp method
let data=arr.find(function (a) {
    return a==5
})
console.log(data);


let DATA=arr.find((a)=>{
    console.log(a);
    
})

//foreach never return anything only undefine is return

arr.forEach(function (a) {
     console.log(a,"val");
})

arr.forEach((a,b,c)=>{
    console.log(a,"val");
    console.log(b,"index");
    console.log(c,"arr");
    
})

//map stores val in new arry but foreach update the same array (diff bt foreacch and map)
arr.map((a,b,c)=>{
    console.log(a,"val");
    // console.log(b,"index");
    // console.log(c,"arr");
    
})
let map=arr.map((a,b,c)=>{
    // console.log(a,"val");
    // console.log(b,"index");
    // console.log(c,"arr");
    return a<4; //return in true or false
    
})
console.log(map);


let Filter_val = arr.filter((a)=>{
    return a<4
})
console.log("filter",Filter_val);
