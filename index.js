//status of the game

let isActive = false

//messages

let count = 0
counterEl = document.getElementById("counter-el")


//cards
let cards = []
let cardsEl = document.getElementById("cards-el")
let card = 0

//cards
//sum 
let sum = 0
let cardsSum = document.getElementById("cards-sum")
cardsSum.textContent += sum
//sum
//start game 
function startGame() {

    if (balance > 9 && isActive === false) {
        count += 1
        counterEl.textContent = "Times Played: " + count
        cards = []
        sum = 0 
        cardsSum.textContent = "Sum: " + sum
        isActive = true
        document.getElementById("button-start").disabled = true
        document.getElementById("button-new-card").disabled = false
        balance -= gameCost
        balanceEl.textContent = "Your account Balance: " + balance + "$"
        getNewCard()
        getNewCard()
    } else if (balance < 9 ) {
        balanceElMsg.textContent = "Add more money to your account to play"
    }
}

// start game
// new card

let newCard = 0
function getNewCard() {
 if (isActive === true) {   
    newCard = Math.floor((Math.random() * 14) +2)
    if (newCard > 11) {
        newCard = 10
    } else if (newCard === 11 && sum >= 11) {
        newCard = 1
    }
    sum += newCard
    checkSum()
    cardsSum.textContent = "Sum: " + sum
    cards.push(newCard)
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
} else if (isActive === false) {
}
}

textEl = document.getElementById("text-message")
//check SUM
function checkSum() {
    if (sum > 21) {
        isActive = false
        textEl.textContent = "Sorry, you lost, hit start game to start over"
        document.getElementById("button-start").disabled = false
        document.getElementById("button-new-card").disabled = true
    } else if (sum === 21) {
        textEl.textContent = "Congrats, you won the game!?"
        balance += 100
        isActive = false
        document.getElementById("button-start").disabled = false
        document.getElementById("button-new-card").disabled = true
    } else if (sum < 21) {
        textEl.textContent = "Wanna get more cards?"
    }
}

//check SUM
// balance
let balance = 100
let gameCost = 10
let addToBalance = 10
let balanceEl = document.getElementById("balance-el")
balanceEl.textContent = "Your account Balance: " + balance + "$"

let balanceElMsg = document.getElementById("balance-el-msg")

// balance
// add to account balance
function addToAccount() {
    balance += addToBalance
    balanceEl.textContent = "Your account Balance: " + balance + "$"
}
//add to account balance