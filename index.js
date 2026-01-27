let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

// Attach functions to window so inline onclick can see them
window.homeAdd1 = function() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

window.homeAdd2 = function() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

window.homeAdd3 = function() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

window.guestAdd1 = function() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

window.guestAdd2 = function() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

window.guestAdd3 = function() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

window.resetScore = function() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
}
