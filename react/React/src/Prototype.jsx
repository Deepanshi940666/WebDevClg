import React from 'react'

const Prototype = () => {
    let arr=[1,2,3,4]
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

// let val=arr.myFilter((a,b,c)=>{
//     // console.log(a);
//     return a>2
// })

let data=arr.myForEach((a,b,c)=>{
    console.log(a);
    
})
 
console.log(data);


    // console.log(Array.prototype);
    // console.log(String.prototype);
    // console.log(Object.prototype);
    
  return (
    <div>Prototype</div>
  )
}

export default Prototype