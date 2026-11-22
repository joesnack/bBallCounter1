let scoreHomeEl = 0
let scoreGuestEl = 0

let sumEl = document.getElementById("scoreHomeEl")
let guestEl = document.getElementById("scoreGuestEl")

function add1() {
    scoreHomeEl += 1
    sumEl.textContent = scoreHomeEl 
}

function add2() {
    scoreHomeEl += 2
    sumEl.textContent = scoreHomeEl 
}

function add3() {
    scoreHomeEl += 3
    sumEl.textContent = scoreHomeEl
}


function add1g() {
    scoreGuestEl += 1
    guestEl.textContent = scoreGuestEl
}

function add2g() {
    scoreGuestEl += 2
    guestEl.textContent = scoreGuestEl
}

function add3g() {
    scoreGuestEl += 3
    guestEl.textContent = scoreGuestEl
}