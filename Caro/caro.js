function start() {
	for (var i = 1; i <= 9; i=i+1) {
		clear(i);
	}
	turn="X";
	win =null; 
	setMessage(turn+" get to start.")
}

function setMessage(msg) {
	document.getElementById("msg").innerText=msg;
}

function nextTurn(matrix) {
	if(win !=null){
		setMessage(win + " win, Please restart to continue!");
	}else if (matrix.innerText=="") {
		matrix.innerText=turn;
		changeTurn();
	}else{
		setMessage("Please pick empty box");
}

}
function changeTurn() {
	if(checkWin(turn)){
		setMessage(turn +" Win");
		win=turn;
	} else if(turn=="X"){
		turn="O";
		setMessage("It's " +turn +" 's turn");
	}else{
		turn="X";
		setMessage("It's " +turn +" 's turn");
	}	
}

function checkWin(move) {
	var result=false;
	if( checkRow(1,2,3,move) || 
		checkRow(4,5,6,move) || 
		checkRow(7,8,9,move) || 
		checkRow(1,4,7,move) || 
		checkRow(2,5,8,move) || 
		checkRow(3,6,9,move) || 
		checkRow(1,5,9,move) || 
		checkRow(3,5,7,move) ){
		result=true;
	}
	return result;
}

function checkRow(a, b, c, move) {
	var result=false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result=true;
	}
	return result;
}


function getBox(num) {
	return document.getElementById("s" + num).innerText;
}

function clear(num) {
	document.getElementById("s"+num).innerText="";
}