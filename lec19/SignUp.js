let SignData = document.querySelector("#Form");
let LoginData = document.querySelector("#LoginForm");
let h1=document.querySelector("#h1")
let h2=document.querySelector("#h2")
let h3=document.querySelector("#h3")

// let Submit=document.querySelector("#submit")
// console.log(SignData);

SignData.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(SignData[0].value);
    // console.log(SignData[1].value);
    // console.log(SignData[2].value);
    let data = {
        name: SignData[0].value,
        email: SignData[1].value,
        password: SignData[2].value,
    };
    localStorage.setItem("UserData", JSON.stringify(data));
});


LoginData.addEventListener("submit", (e) => {
    e.preventDefault();
     let Sign = localStorage.getItem("UserData");
     let SignUpData =JSON.parse(Sign)
    let data = {
        name: LoginData[0].value,
        Email: LoginData[1].value,
        Password: LoginData[2].value
    };
   
    
    // localStorage.setItem("LoginData", JSON.stringify(data));

   
    // let login = localStorage.getItem("LoginData");

    if (SignUpData.name===data.name && SignUpData.Email===data.email && SignUpData.password===data.Password ) {
        alert("Login.... Done")
    }
    else{
        alert("Incorrect Input.....")
    }

   
});

let Sign = localStorage.getItem("UserData");
let SignUpData =JSON.parse(Sign);

if(SignUpData){
    h1.innerText= SignUpData.name
    h2.innerText= SignUpData.email
    h3.innerText= SignUpData.password
}