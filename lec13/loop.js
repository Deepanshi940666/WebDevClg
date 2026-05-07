let arr=[1,2,3,4.5,true,"hello"]
console.log(arr[5]);

//for in loop use to get index no

for(let i in arr){
    console.log(i);
    
}

//for of loop is use to get val of arr

for(let val of arr){
    console.log(val);
    
}

console.log([]==[]);//false bcz both has diff reference

//object

let Student_obj={
    name:"Deepanshi",
    year:2,
    age:19
}

console.log(Student_obj.name);
console.log(Student_obj.year);
console.log(Student_obj.age);

