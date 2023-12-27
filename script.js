let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;

const winningPattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[3,4,5],
[6,7,8],
[2,5,8],

];

const resetGame = () => {
	turnO = true;
	enableBox();
	msgContainer.classList.add("hide");

}

boxes.forEach ((box) => {
	box.addEventListener("click", () => {
		console.log("box was clicked")
		if(turnO) {
		box.innerText = "O";
		box.style.backgroundColor = "red";
		turnO = false;
		}
		else{
	    box.innerText = "X";
	    box.style.backgroundColor = "green";
		turnO = true;
		}
		 box.disabled = true;

		 checkWinner();
	})

})

const disableBox = () => {
	for(box of boxes) {
		box.disabled = true;
	}
}

const enableBox = () => {
	for(box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
}


const showWinner = (winner) => {
	msg.innerText = `Congratulation, Winner is ${winner}`
	msgContainer.classList.remove("hide");

	disableBox();
}

const checkWinner = () => {
	for(let pattern of winningPattern) {
		let posVal = boxes[pattern[0]].innerText
		let posVa2 = boxes[pattern[1]].innerText
		let posVa3 = boxes[pattern[2]].innerText

		if(posVal != "" && posVal !="" && posVa3 != "" ) {
			if(posVal === posVa2 && posVa2 === posVa3) {
				

				showWinner(posVal);
			}
		}
	}
}

newBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);



	


