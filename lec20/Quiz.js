console.log("hii");

const questions = [
    {
        question: "HTML ka full form kya hai?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tabular Markup Language",
            "Home Tool Markup Language",
        ],
        answer: 0,
    },
    {
        question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
        options: ["font-color", "text-color", "color", "background"],
        answer: 2,
    },
    {
        question:
            "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
        options: ["var", "int", "string", "declare"],
        answer: 0,
    },
    {
        question: "Kaunsa HTML tag sabse bada heading banata hai?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: 2,
    },
    {
        question: "JavaScript me array ki length kaise pata karte hain?",
        options: ["array.size()", "array.length", "array.count", "length(array)"],
        answer: 1,
    },
];

let currQues = 0;
let TimeLeft = 20;
let score = 0;
let answered = false;
let timeInterval = 0;

function LoadQues() {
    answered = false;
    TimeLeft = 20;
    document.querySelector("#timer").textContent = TimeLeft;
    const q = questions[currQues];
    document.getElementById("QuesNo").textContent =
        `Question ${currQues + 1} of ${questions.length}`;
    document.getElementById("Question").textContent = q.question;



    //options ke liye
    const OptionDiv = document.getElementById("options");
    OptionDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = option;
        OptionDiv.appendChild(btn);
        btn.onclick=()=>checkAns(index,btn)
    });

    // let value= document.querySelectorAll("#option")
    // value.forEach((val)=>{
    //       val.addEventListener("click",()=>{
    //             val.
    //       })
    // })

}

window.onload = function () {
    LoadQues();
};

function checkAns(selectedIndex, btn){
    console.log("byeyeyeye");
    
    if(answered){
        return
    }
    console.log("hellooooooooooooooooooooooooooooooo");
    
    answered=true;
    const correctAns = questions[currQues].answer
    const allOption= document.querySelectorAll(".option")
    console.log(allOption,"heeheeheehd");
    

    allOption.forEach(o=>o.disabled=true)

    if(selectedIndex===correctAns){
        score++;
        btn
    }
};

