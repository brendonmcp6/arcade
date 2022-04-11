const player1 = "X"
const player2 = "O"
let currentPlayer = "X"

const gameBoard = [
	"", "", "",
	"", "", "",
	"", "", ""
]



const winningConditions = [
	//horizontal winners
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	//vertical winners
	[0, 3, 6], 
	[1, 4, 7], 
	[2, 5, 8], 
	//diagonal winners
	[0, 4, 8],
	[2, 4, 6]
]


let playerx = document.getElementById("playerX")
let playerO = document.getElementById("playerO")
let whosTurn = document.getElementById("whosTurn")
let nextTurn = document.getElementById("nextTurn")
let insertButton1 = document.getElementById("playerName")
let insertButton2 = document.getElementById("playerName2")
let newPlayer = document.getElementById("playerInput")
let cells = document.getElementsByClassName("cell")
let board = document.getElementById("board")
let winningTitle = document.getElementById("title")
let roundWon = false


function cellClicked(click){
	if(roundWon === false){
		let currentCell = click.target.id-1
		// console.log(currentCell)
		console.log("selected index", currentCell)
		if(click.target.innerText){
			return
		}
		board[currentCell] = currentPlayer
		click.target.innerText = currentPlayer
		if (currentPlayer === player2){
			click.target.style.color = "#FFCB77"
		}
		gameBoard[currentCell] = currentPlayer
		isItAWinner()
		if(currentPlayer === player1){
			currentPlayer = player2
		}else{
			currentPlayer = player1
		}
		console.log(gameBoard)
	}
}



function cellclicker(){
	for(var i = 0; i < cells.length; i++){
		cells[i].addEventListener("click", cellClicked)
	}
}

cellclicker()


function isItAWinner(){
	if(roundWon === false){
		for(let i = 0; i <= 7; i++){
			const winCondition = winningConditions[i]
			let firstIndex = winCondition[0]
			let secondIndex = winCondition[1]
			let thirdIndex = winCondition[2]
			
			let a = gameBoard[firstIndex]
			let b = gameBoard[secondIndex]
			let c = gameBoard[thirdIndex]
	
			if(a === "" || b === "" || c ===""){
				continue;
			}
	
			if(a===b && b===c){
				roundWon = true;
				console.log(winCondition)
				break
			}
		}
	
		if(roundWon === true){
			console.log(winningConditions)
			winningTitle.innerText = currentPlayer + " is the winner!"
			winningTitle.style.fontSize = "32px"
			winningTitle.style.marginTop = "20px"
		}
	}


}


//these add all the DOM stuff
function playersTurn(){
	nextTurn.addEventListener("click", function () {
		whosTurn.innerHTML = "It's " + currentPlayer + "'s" + " turn"
	})
	
	
	insertButton1.addEventListener("click", function () {
		playerx.innerText = newPlayer.value + " is X"
		newPlayer.value = ""
	})
	
	insertButton2.addEventListener("click", function () {
		playerO.innerText = newPlayer.value + " is O"
		newPlayer.value = ""
	})
}

playersTurn()

