scoreHomeEl = document.getElementById("score-home-el")
scoreGuestEl = document.getElementById("score-guest-el")
homeEl = document.getElementById("home-el")
guestEl = document.getElementById("guest-el")
score1El = document.getElementById("score1-pos")
score2El = document.getElementById("score2-pos")


scoreHomeEl.textContent = 0
scoreGuestEl.textContent = 0

function highlightLeader() {
    if(parseInt(scoreHomeEl.textContent) > parseInt(scoreGuestEl.textContent)) {
        homeEl.classList.add("highlight")
        guestEl.classList.remove("highlight")

        score1El.classList.add("pos-adjust")
        score2El.classList.remove("pos-adjust")
    }
    else if(parseInt(scoreHomeEl.textContent)< parseInt(scoreGuestEl.textContent)) {
        homeEl.classList.remove("highlight")
        guestEl.classList.add("highlight")

        score2El.classList.add("pos-adjust")
        score1El.classList.remove("pos-adjust")
    }
    else {
        homeEl.classList.remove("highlight")
        guestEl.classList.remove("highlight")

        score1El.classList.remove("pos-adjust")
        score2El.classList.remove("pos-adjust")
    }
}

function add1home() {
    let newScore = parseInt(scoreHomeEl.textContent) + 1
    scoreHomeEl.textContent = newScore
    highlightLeader()
}

function add2home() {
    let newScore = parseInt(scoreHomeEl.textContent) + 2
    scoreHomeEl.textContent = newScore
    highlightLeader()
}

function add3home() {
    let newScore = parseInt(scoreHomeEl.textContent) + 3
    scoreHomeEl.textContent = newScore
    highlightLeader()
}

function add1guest() {
    let newScore = parseInt(scoreGuestEl.textContent) + 1
    scoreGuestEl.textContent = newScore
    highlightLeader()
}

function add2guest() {
    let newScore = parseInt(scoreGuestEl.textContent) + 2
    scoreGuestEl.textContent = newScore
    highlightLeader()
}

function add3guest() {
    let newScore = parseInt(scoreGuestEl.textContent) + 3
    scoreGuestEl.textContent = newScore
    highlightLeader()
}

function reset() {
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    highlightLeader()
}
