function computerThink() {
	computerChoice = Math.floor(Math.random()*1);
	if(computerChoice === 1) {
		computerChoice = "rock";
	}
	else if(computerChoice === 0.5){
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
}
function rockPick(){
	userChoice = "rock";
	computerThink();
	results();
	replay();
}
function paperPick() {
	userChoice = "paper";
	computerThink();
	results();
	replay();
}
function scissorsPick() {
	userChoice = "scissors";
	computerThink();
	results();
	replay();
}
function results() {
	alert("You choose " + userChoice);
	alert("Computer Choose " + computerChoice);
	compare(userChoice, computerChoice);
}
function compare(choice1, choice2) {
	if (choice1)
}