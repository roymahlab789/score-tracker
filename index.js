let scoreHomeEl = document.getElementById("score-home")
let scoreAwayEl = document.getElementById("score-away")
let scoreHome = 0
let scoreAway = 0
function homeAdd1() {
scoreHome += 1
scoreHomeEl.textContent = scoreHome

}

function homeAdd2() {
scoreHome += 2
scoreHomeEl.textContent = scoreHome

}

function homeAdd3() {
scoreHome += 3
scoreHomeEl.textContent = scoreHome

}

function awayAdd1() {
    scoreAway += 1 
    scoreAwayEl.textContent = scoreAway
}

function awayAdd2() {
    scoreAway += 2 
    scoreAwayEl.textContent = scoreAway
}

function awayAdd3() {
    scoreAway += 3
    scoreAwayEl.textContent = scoreAway
}

function resetScore() {
    scoreHome = 0
    scoreAway = 0
    scoreHomeEl.textContent = 0
    scoreAwayEl.textContent = 0    
}