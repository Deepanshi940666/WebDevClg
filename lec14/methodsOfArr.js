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
    return a*2; //return in true or false
    
})
console.log(map);


let Filter_val = arr.filter((a)=>{
    return a<4
})
console.log("filter",Filter_val)

let Reduce_sum= arr.reduce((a,b,c,d)=>{ //c-index,d-array a=a+b b is next val of index
    console.log(a,"a");
    console.log(b,"b");
    return a+b
})

let sum= arr.reduce((a,b,c,d)=>{ //c-index,d-array a=a+b b is next val of index
    console.log(a,"a:");
    console.log(b,"b:");
    return a+b
},10)//here is initial val of a=10 and b=index 0 val

let a=[1,2,3,5,53,6,3,6,345,2]
let Less_4=a.filter((a)=>{
    return a<4
})

let even=Less_4.filter((Less_4)=>{
    return Less_4%2==0
})

let Sum=even.reduce((a,b)=>{
    return a+b
})

console.log(Sum);

//---------MAP-----------

//map() always returns an array of the SAME LENGTH. Use it to transform, not to filter.

//Extract names from objects
const students = [{name:"Arya", marks:85}, {name:"Ravi", marks:72}];
const names = students.map(s => s.name);

console.log(names[0]);
console.log(names[1]);
console.log(names);

//Add GST to prices
let price=[200,400];
let GST= 5; //in perceentage

let final= price.map((a)=>{
    return a*(1+(GST/100))
})
console.log(final);

let Amt= price.map(a=>a+(GST/100)*a.toFixed(2));
console.log(Amt);

//--------FILTER-----------

//filter() creates a new array with only the elements that pass the test. If no elements pass, it returns an empty array [] — never undefined.
//filter() vs find(): filter() returns an ARRAY of ALL matches. find() returns ONE element.

// Only even numbers

let nums=[1,2,253,4,5,6,7,8,9,10]
console.log("even no.",nums.filter(a=>a%2==0));

//Students who passed (marks >= 40)

let Students=[{name:"Arya", marks:85}, {name:"Ravi", marks:72}, {name:"pari", marks:80}, {name:"Raja", marks:34}, {name:"akash", marks:23}, {name:"Pihu", marks:39}]
console.log("Marks of These Students has greater then 40",Students.filter(Student=>Student.marks>=40 ));

//  Remove empty strings
const items = ["apple", "", "mango", "", "banana"];
console.log("string is: ", items.filter(a=> a!=""));
