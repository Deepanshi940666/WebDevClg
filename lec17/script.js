let btn = document.querySelectorAll(".box");
let turn = "O";
let msgBox = document.getElementById("msg");
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let reset=document.querySelector("#reset")
for (let val of btn) {
  val.addEventListener("click", () => {
    if(val.innerText!=""){
        return;
    }
    else if (turn == "O") {
      val.innerText = "O";
      turn = "X";
       
    } else {
      val.innerText = "X";
      turn = "O";
      winner()
    }
    
    val.disabled = true;
  
       winner();
  });
  
}

function winner() {
  for (let pattern of win) {
    let x = btn[pattern[0]].innerText;
    let y = btn[pattern[1]].innerText;
    let z = btn[pattern[2]].innerText;
    if (x != "" && y != "" && z != "") {
      if (x == y && y == z) {
        msgBox.innerText = "Yeahhhhhhh " +x+ " ap jeet gyeeeeeeeeeeeeeeee";
        // msgBox.style.backgroundColor="beige"
        // msgBox.style.height="40px"
        // msgBox.style.margin="20px"
        // msgBox.style.border=" solid black 3px"
        msgBox.style.visibility="visible"
      }
    }
  }
}

reset.addEventListener("click",()=>{
    for(let val of btn){
        val.innerText=""
        val.disabled=false
    }
    msgBox.style.visibility="hidden"
})
