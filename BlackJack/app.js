function rules() {
  let rules = document.getElementById("hero-bottom");
  if (rules.style.display === "none") {
    rules.style.display = "block";
  } else {
    rules.style.display = "none";
  }
}
let cards = [];
let sum = 0;
function card() {
  let card = Math.floor(Math.random() * 10 + 2);
  cards.push(card);
  console.log(cards);
  document.getElementById("hand").innerText = cards;
  sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  console.log(sum);

  if (sum === 21) {
    document.getElementById("info").innerText = "You've won!";
    console.log("wygrales");
    cards = [];
    sum = 0;
  } else if (sum > 21) {
    document.getElementById("info").innerText = "You've lost";
    console.log("przegrales");
    cards = [];
    sum = 0;
  } else {
    document.getElementById("info").innerText = "Keep playing";
  }
}
function pass(){
  cards = [];
  sum = 0;
  document.getElementById("hand").innerText = cards;
  document.getElementById("info").innerText = "Keep playing";
}