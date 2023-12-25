let homeScore = 0;
let awayScore = 0;
let secondsLeft = 300;
let time = document.getElementById("time")
let state = "zero";
let nInterval;

let homeScoreEl = document.getElementById("homeScore");
let awayScoreEl = document.getElementById("awayScore");


function p1Home() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function p2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function p3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}


function p1Away() {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
}

function p2Away() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
}

function p3Away() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
}

function m1Home() {
    if (homeScore > 0) {
    homeScore -= 1
    homeScoreEl.textContent = homeScore;
    }
}

function m1Away() {
    if (awayScore > 0) {
    awayScore -= 1
    awayScoreEl.textContent = awayScore;
    }
}


function minSecond() {
    
        secondsLeft -= 1;
        time.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            time.classList.add("gameOver");
            time.textContent = "Game Over";
            state = "over";
            console.log(state)
            clearInterval(nInterval);
        }
    }
    

function startGame(){
    console.log(state)
    if (state = "over" && state != "zero" && state != "paused"){
            secondsLeft = 300; 
            time.textContent = secondsLeft;
    }
     
     if (state != "running") {
            time.classList.remove("gameOver");
            state = "running"; 
        if (secondsLeft > 0) {
          nInterval = setInterval(minSecond,1000);
        }
    }
}

function pauseGame(){
    
    
    state = "paused";
    console.log(state);
    clearInterval(nInterval);
    
}


function resetGame(){
    time.classList.remove("gameOver");
    clearInterval(nInterval); 
    state = "zero";
    secondsLeft = 300
    homeScore = 0;
    awayScore = 0;
    time.textContent = secondsLeft; 
    homeScoreEl.textContent = homeScore;
    awayScoreEl.textContent = awayScore;
}

