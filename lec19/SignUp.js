let SignData= document.querySelector("#Form")
// let Submit=document.querySelector("#submit")
// console.log(SignData);

SignData.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(SignData[0].value);
    // console.log(SignData[1].value);
    // console.log(SignData[2].value);
    let data={
        name: SignData[0].value,
        Email: SignData[1].value,
        Password: SignData[2].value
    }
    localStorage.setItem("UserData",JSON.stringify(data))
})

let LoginData=document.addEventListener("submit",(e)=>{
    e.preventDefault()
     let data={
        name: SignData[0].value,
        Email: SignData[1].value,
        Password: SignData[2].value
    }
    localStorage.setItem("LoginData",JSON.stringify(data))
})

let Sign= localStorage.getItem("UserData")
let login= localStorage.getItem("LoginData")

if(Sign===login){
    console.log("Done");
    
}