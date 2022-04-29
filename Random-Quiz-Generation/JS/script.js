function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
"use strict";
const data=[
    [
        "The Stablity of a flexible body depend on?",
        [
            "height of the center of gravity from the ground",
            "base area of the body",
            "shape of the body",
            "all of above"
        ],
        3
    ],
    [
        "What is electric current measured in?",
        [
            "Volts",
            "Ampers",
            "Ohms",
            "Coulombs"
        ],
        1
    ],
    [
        "What is defined as work divided by time?",
        [
            "Latent heat",
            "Kinetic energy",
            "Power",
            "Force"
        ],
        2
    ],
    [
        "The Average Radius of the orbit of the revolution of a planet around the sun three time greater than the planet Earth.How many years does the planet take to revolve around the sun?",
        [
            "4 years",
            "6 years",
            "7 years",
            "8 years"
        ],
        3
    ],
    [
        "The color of visible light spectrum ranges from red to ...?",
        [
            "Violet",
            "Blue",
            "Yellow",
            "Green"
        ],
        0
    ],
    [
        "A current of 5 A flows through the conductor.Calculate the number of electron flow through it in 2s?",
        [
            "6.25 x 10^18",
            "6.25 x 10^21",
            "8.25 x 10^19",
            "6.25 x 10^19"
        ],
        3
    ],
    [
        "For which of the following substances does resistance decrease with increase in temperature? ",
        [
            "Platinum",
            "Mercury",
            "Carbon",
            "Copper"
        ],
        0
    ],
    [
        "If a charge of 12.5 nC flows in 50 ms, the current flowing is- ",
        [
            "2.5 × 10^–7 A",
            "2.5 × 10^–5A",
            "6.25 × 10^–7 A",
            "145 A"
        ],
        0
    ],
    [
        "If two heaters of each power 1 kW are connected in parallel to a 250V supply their combined rate for heating will be –",
        [
            "5000 W",
            "1000 W",
            "2000 W",
            "No listed choice"
        ],
        2
    ],
    [
        "The temperature at which the r.m.s. velocity of H² becomes escape velocity of eath: ",
        [
            "10059°C",
            "10332°C",
            "10059°K",
            "10332°K"
        ],
        2
    ],
    [
        "Two plane mirrors are inclined to one another at an angle of 40°. A point object is placed in between them. The number of images formed due to reflection at both mirrors is-",
        [
            "8",
            "9",
            "6",
            "Infinite"
        ],
        0
    ]
];
shuffle(data);
let counter=0;
let score=0;
let root;
class Task {
constructor(task) {
    this.question=task[0];
    this.answers=task[1];
    this.correct=task[2];
    this.selected=-1;
    this.render();
}
render() {
    let container=document.createElement("div");
    container.classList="task";
    container.innerHTML+=`<div class="task_question">${this.question}</div>`;
    let answerBox=document.createElement("div");
    answerBox.classList="task_answers";
    this.answers.forEach((a,i)=>{
        let btn=document.createElement("button");
        btn.classList="task_btn";
        btn.innerText=a;
        btn.onclick=()=>{
            this.selectAnswer(i);
        }
        answerBox.appendChild(btn);
    });
    container.appendChild(answerBox);
    let submitBtn=document.createElement("button");
    submitBtn.classList="task_submit";
    submitBtn.innerText="Submit";
    submitBtn.onclick=()=>{
        this.submitAnswer();
    }
    container.appendChild(submitBtn);
    render(container,root);
}
selectAnswer(idx) {
    let btn=document.getElementsByClassName("task_btn");
    for(let i=0;i<btn.length;i++) {
        if(idx==i) {
            btn[i].classList.add("task_btn_selected");
        } else {
            btn[i].classList.remove("task_btn_selected");
        }
    }
    this.selected=idx;
}
submitAnswer() {
    let isCorrect=this.selected==this.correct;
    if(isCorrect) score++;
    let msg=`<div class="task_result ${isCorrect?'task_result_correct':''}">${isCorrect?"Correct!":"Incorrect!"}</div>`;
    setTimeout(()=>{
        root.innerHTML=msg;
        
        
        window.navigator.vibrate(200); 
    },800-10);
    setTimeout(()=>{
        (++counter)>=data.length?root.innerHTML=`<div class="score">You scored ${Math.round(score/data.length*100)} %</div>`:new Task(data[counter]);
    },2800-10);
    document.querySelector(".task").style.animation="test 800ms";
}
}

const render=(el,p)=>{
    p.innerHTML="";
    p.appendChild(el);
}

onload=()=>{
    root=document.getElementById("root");
    root.innerHTML=`
         <div class="container">
        <div align="center">
            <div class="title"><b>Online Examinations</b></div></div>
            <p>Note to be remeber:-<br><br>1. There is no time limit for any question.<br>2. 10 Questions are asked in this Quiz.<br>3.  Question are asked only from Physics.<br>4. All Questions are manodatory.</p>
            <div align="center"><button class="start">Start</button></div><div class="right"></div>
        </div>
    `;    document.querySelector(".start").onclick=function() {
        new Task(data[counter]);
    }
}
