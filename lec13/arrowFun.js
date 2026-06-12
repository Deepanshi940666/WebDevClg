//print hii 5 times in interval of 2s  (2sX5=10)

let Setime=setInterval(() => {
    console.log("hii");
    
}, 2000);

setTimeout(()=>{
    clearInterval(Setime);
},10000);

