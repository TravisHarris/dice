
// plus and minus buttons

$("#dice-list li h3").on("click", 'input[type="button"]', function() {
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


/*

	Dice Rolling

*/


// generate random number based on type of die.
// specifically because D10's can have value 0

function randomNumber(die) {
	let bottom = die[0];
	let top = die[1];
	return Math.floor(Math.random() * (top - bottom + 1)) + bottom;
}

// types of dice

var d4 = [1, 4];
var d6 = [1, 6];
var d8 = [1, 8];
var d10 = [0, 9];
var d12 = [1, 12];
var d20 = [1, 20];


// roll dice when 'roll' button clicked

$("#dice-form").on("submit", function(event){
	event.preventDefault();

	// get number of each type of dice 
	let numd4s = $('input[name="d4"]').val();
	let numd6s = $('input[name="d6"]').val();
	let numd8s = $('input[name="d8"]').val();
	let numd10s = $('input[name="d10"]').val();
	let numd12s = $('input[name="d12"]').val();
	let numd20s = $('input[name="d20"]').val();
	let numd100s = $('input[name="d100"]').val();

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
						value += "<li>";
						value += '<img class="d4" src="img/dice-4.png" alt="D4">';
						value += '<h2 class="number-d4">';
						value += randomNumber(d4);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 1){	//	D6
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<img class="d6" src="img/dice-6.png" alt="D6">';
						value += '<h2 class="number-d6">';
						value += randomNumber(d6);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 2){	//	D8
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<img class="d8" src="img/dice-8.png" alt="D8">';
						value += '<h2 class="number-d8">';
						value += randomNumber(d8);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 3){	//	D10
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<img class="d10" src="img/dice-10.png" alt="D10">';
						value += '<h2 class="number-d10">';
						value += randomNumber(d10);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 4){	//	D12
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<img class="d12" src="img/dice-12.png" alt="D12">';
						value += '<h2 class="number-d12">';
						value += randomNumber(d12);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 5){	//	D20
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<img class="d20" src="img/dice-20.png" alt="D20">';
						value += '<h2 class="number-d20">';
						value += randomNumber(d20);
						value += '</h2>';
						value += "</li>";
					}
				}
				if(i === 6){	//	D100 (2 D10's)
					for(let j = 0; j < types[i]; j++) {
						value += "<li>";
						value += '<div class="d100-collection">';
						value += '<img class="d100" src="img/dice-10.png" alt="D10">';
						value += '<h2 class="number-d100-1">';
						value += randomNumber(d10);
						value += '</h2>';
						value += '<img class="d100" src="img/dice-10.png" alt="D10">';
						value += '<h2 class="number-d100-2">';
						value += randomNumber(d10);
						value += '</h2>';
						value += "</div>";
						value += "</li>";
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