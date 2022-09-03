
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let score = 0
let count = 0

// HOME SCORE
function plus1() {
  score += 1
  homeScore.textContent = score
}
function plus2() {
  score += 2
  homeScore.textContent = score
}
function plus3() {
  score += 3
  homeScore.textContent = score
}
// GUEST SCORE
function add1() {
  count += 1
  guestScore.textContent = count
}
function add2() {
  count += 2
  guestScore.textContent = count
}
function add3() {
  count += 3
  guestScore.textContent = count
}

//RESET

function reset() {
  location.reload()
}
