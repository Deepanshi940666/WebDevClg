import React from 'react'

const Prototype = () => {
    let arr=[1,2,3,4,5]
    // arr.prototype.fun1= function() {
    //     console.log("hiii");
        
    // }
    // arr.fun1();

    // let data=arr.forEach((a,b,c)=>{
    //     console.log(a);
    //     return a;
    // })
//     let data=arr.map((a,b,c)=>{
//         console.log(a);
//         return a;
//     })

//  console.log(data); 

Array.prototype.myMap=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i],i,this))
    }
    return res
}
Array.prototype.myFilter=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            res.push(this[i])
        }
    }
    return res
}
Array.prototype.myForEach=function(cb){
  
    for(let i=0;i<this.length;i++){   
        (cb(this[i],i, this));
    }
    // return variable
}

Array.prototype.myReduce= function(cb,data=0){
    let val=data;
    for(let i=0;i<this.length;i++){
       val= cb(val,this[i],i,this)
    }
    return val
}
// let val=arr.myFilter((a,b,c)=>{
//     // console.log(a);
//     return a>2
// })

let red=arr.myReduce((a,b,c,d)=>{
    return a+b
},10)
console.log(red);

// let data=arr.myForEach((a,b,c)=>{
//     console.log(a);
    
// },10)
 
// console.log(data);


    // console.log(Array.prototype);
    // console.log(String.prototype);
    // console.log(Object.prototype);
    
  return (
    <div>Prototype</div>
  )
}

export default Prototype