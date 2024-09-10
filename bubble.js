var clutter = "";
var timer = 10;
var score = 0;
var hit;

function increaseScore(){
    score += 10;
    document.querySelector("#myScore").textContent = score;

}

function bubbleMake(){
    for(var i = 1; i <= 152 ; i++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;      
}

function runTimer(){
    var time = setInterval(function (){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1>Time over !</h1>`;
        }
    },1000);
}

function clickHit(){
     hit = Math.floor(Math.random() * 10);
    document.querySelector("#hiter").textContent = hit;
}


    document.querySelector("#pbtm")
    .addEventListener("click", function(details){
        var chacha = Number(details.target.textContent); 
        if(chacha === hit){
            increaseScore();
            clickHit(); 
            bubbleMake();
        }else{
            document.querySelector("#pbtm").textContent = `game over`;
        }
        
    }); 
    

clickHit(); 
runTimer();
bubbleMake();
