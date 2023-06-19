(function (window, document) {
	
//tick \u2713
//cross \274c

	window.onload = function(){

		//declaring variables
		let btn = new Array();
		let temp;
		let flag = 0;
		let gameEnded = false;
		let done = new Array();
		let winners = new Array();
		let defaultColor = '#64ff78';
		let winColor = 'red';
		
		//done array initialization
		for (let i = 0; i<= 8; i++) {
			done[i] = 0;
		}
		
		//buttons
		for (let i = 0; i <= 8; i++) {
			temp = "btn" + i;
			btn[i] = document.getElementById(temp);
			btn[i].value = " ";
			
			btn[i].onclick = function() {
				if (!gameEnded) {
					//put tick or cross
					if (done.includes(btn[i]) == false) {
						done.push(btn[i]);

						if (flag == 0) {
							btn[i].value = "\u2713";
							flag = 1;
						} else {
							btn[i].value = "\u274c";
							flag = 0;
						}
					}

					//check if win
					for (let x = 0; x <= 6; x+=3) {
						if ((btn[x].value == btn[x+1].value && btn[x].value == btn[x+2].value) && btn[x].value != " ") {
							gameEnded = true;
							winners.push(x, x+1, x+2);
							break;
						}
					}

					for (let x = 0; x <= 2; x++) {
						if ((btn[x].value == btn[x+3].value && btn[x].value == btn[x+6].value) && btn[x].value != ' ') {
							gameEnded = true;
							winners.push(x, x+3, x+6);
							break;
						}
					}

					if ((btn[0].value == btn[4].value && btn[0].value == btn[8].value) && btn[4].value != ' ') {
							gameEnded = true;
							winners.push(0, 4, 8);
					}

					if ((btn[2].value == btn[4].value && btn[2].value == btn[6].value) && btn[4].value != ' ') {
							gameEnded = true;
							winners.push(2, 4, 6);
					}

					//game over screen
					if (gameEnded) {
						btn[winners[0]].style.background = winColor;
						btn[winners[1]].style.background = winColor;
						btn[winners[2]].style.background = winColor;
					}
				}

			}
		}
		
		//reset button
		let resetBtn = document.getElementById("reset");
		resetBtn.onclick = function() {
			for (let i = 0; i <= 8; i++) {
				btn[i].value = " ";
			}
			flag = 0;
			done = [];
			gameEnded = false;
			for (let j = 0; j <= 8; j++) {
				btn[j].style.background = defaultColor;
			}
			winners = [];
		}
		
	}

})(window, document);


