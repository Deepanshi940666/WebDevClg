let H1= document.querySelectorAll("H1")
for(let val of H1){
    val.style.color="red"
}
let name=document.getElementById("Name")
let nameData= prompt("Enter your name")
name.innerText= "Name: "+nameData