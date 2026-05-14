let btn =document.querySelectorAll(".box")
let turn="O";
let msg= document.getElementById("msg")
let win=[[0,1,2],[0,3,6],[1,4,7],[2,5,8]]

for(let val of btn){
    val.addEventListener("click",()=>{
        if(turn=="O"){
            val.innerText="O";
            turn="X"
        }
        else{
            val.innerText="X";
            turn="O" 
        }
          val.disabled=true
    })
}



