
// plus and minus buttons

$("#dice-list li .info").on("click", 'input[type="button"]', function(event) {
	let num = $(this).siblings(".num-of-dice").val();
	if($(this).val() === "+"){		
		num++;
	}
	else {
		if(num > 0){
			num--;
		}
	}
	$(this).siblings(".num-of-dice").val(num);
});


	/*----------------------------------------
		Dice Rolling
	----------------------------------------*/


// generate random number based on type of die.
// specifically because D10's can have value 0

function randomNumber(die) {
	let bottom = die[0];
	let top = die[1];
	return Math.floor(Math.random() * (top - bottom + 1)) + bottom;
}

// types of dice

const d4 = [1, 4];
const d6 = [1, 6];
const d8 = [1, 8];
const d10 = [0, 9];
const d12 = [1, 12];
const d20 = [1, 20];


// roll dice when 'roll' button clicked

$("#dice-form").on("submit", function(event) {
	event.preventDefault();

	// get number of each type of dice 
	let numd4s = $('.info input[name="d4"]').val();
	let numd6s = $('.info input[name="d6"]').val();
	let numd8s = $('.info input[name="d8"]').val();
	let numd10s = $('.info input[name="d10"]').val();
	let numd12s = $('.info input[name="d12"]').val();
	let numd20s = $('.info input[name="d20"]').val();
	let numd100s = $('.info input[name="d100"]').val();

	// store the number of each dice in an array to loop thru
	let types = [numd4s, numd6s, numd8s, numd10s, numd12s, numd20s, numd100s];

	let allNums = true;
	for(let i = 0; i < types.length; i++){
		if(isNaN(types[i])){
			allNums = false;
		}
	}

	if(allNums){
		// start html element
		let value = '<ul id="dice-rolled">';

		// loop thru each type of dice and check if there is more than 0
		// if so roll that many dice and show them on the screen
		for(let i = 0; i < types.length; i++){
			if(types[i] !== 0){
				if(i === 0){	//	D4
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d4" src="../media/dice/dice-4.png" alt="D4">
								<h2 class="number-d4">${randomNumber(d4)}</h2>
							</li>`;
					}
				}
				if(i === 1){	//	D6
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d6" src="../media/dice/dice-6.png" alt="D6">
								<h2 class="number-d6">${randomNumber(d6)}</h2>
							</li>`;
					}
				}
				if(i === 2){	//	D8
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d8" src="../media/dice/dice-8.png" alt="D8">
								<h2 class="number-d8">${randomNumber(d8)}</h2>
							</li>`;
					}
				}
				if(i === 3){	//	D10
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d10" src="../media/dice/dice-10.png" alt="D10">
								<h2 class="number-d10">${randomNumber(d10)}</h2>
							</li>`;
					}
				}
				if(i === 4){	//	D12
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d12" src="../media/dice/dice-12.png" alt="D12">
								<h2 class="number-d12">${randomNumber(d12)}</h2>
							</li>`;
					}
				}
				if(i === 5){	//	D20
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<img class="d20" src="../media/dice/dice-20.png" alt="D20">
								<h2 class="number-d20">${randomNumber(d20)}</h2>
								</li>`;
					}
				}
				if(i === 6){	//	D100 (2 D10's)
					for(let j = 0; j < types[i]; j++) {
						value += `
							<li>
								<div class="d100-collection">
									<img class="d100" src="../media/dice/dice-10.png" alt="D10">
									<img class="d100" src="../media/dice/dice-10.png" alt="D10">
									<h2 class="number-d100-1">${randomNumber(d10)}</h2>
									<h2 class="number-d100-2">${randomNumber(d10)}</h2>
								</div>
							</li>`;
					}
				}
			}
		}

		// end html element and show it on the screen
		value += "</ul>";
		$("#dice-section").html(value);

		// scroll screen down to show results
		let result = document.getElementById("dice-section");
		result.scrollIntoView();
	}
});



// reset the number of each dice to zero when reset button pressed
$('#reset-btn').on("click", function(event) {
	$('.info input[name="d4"]').val(0);
	$('.info input[name="d6"]').val(0);
	$('.info input[name="d8"]').val(0);
	$('.info input[name="d10"]').val(0);
	$('.info input[name="d12"]').val(0);
	$('.info input[name="d20"]').val(0);
	$('.info input[name="d100"]').val(0);
});