"use strict";

// plus and minus buttons

$("#dice-list li .info").on("click", 'input[type="button"]', function (event) {
	var num = $(this).siblings(".num-of-dice").val();
	if ($(this).val() === "+") {
		num++;
	} else {
		if (num > 0) {
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
	var bottom = die[0];
	var top = die[1];
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

$("#dice-form").on("submit", function (event) {
	event.preventDefault();

	// get number of each type of dice 
	var numd4s = $('.info input[name="d4"]').val();
	var numd6s = $('.info input[name="d6"]').val();
	var numd8s = $('.info input[name="d8"]').val();
	var numd10s = $('.info input[name="d10"]').val();
	var numd12s = $('.info input[name="d12"]').val();
	var numd20s = $('.info input[name="d20"]').val();
	var numd100s = $('.info input[name="d100"]').val();

	// store the number of each dice in an array to loop thru
	var types = [numd4s, numd6s, numd8s, numd10s, numd12s, numd20s, numd100s];

	var allNums = true;
	for (var i = 0; i < types.length; i++) {
		if (isNaN(types[i])) {
			allNums = false;
		}
	}

	if (allNums) {
		// start html element
		var value = '<ul id="dice-rolled">';

		// loop thru each type of dice and check if there is more than 0
		// if so roll that many dice and show them on the screen
		for (var _i = 0; _i < types.length; _i++) {
			if (types[_i] !== 0) {
				if (_i === 0) {
					//	D4
					for (var j = 0; j < types[_i]; j++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d4\" src=\"../media/dice/dice-4.png\" alt=\"D4\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d4\">" + randomNumber(d4) + "</h2>\n\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 1) {
					//	D6
					for (var _j = 0; _j < types[_i]; _j++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d6\" src=\"../media/dice/dice-6.png\" alt=\"D6\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d6\">" + randomNumber(d6) + "</h2>\n\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 2) {
					//	D8
					for (var _j2 = 0; _j2 < types[_i]; _j2++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d8\" src=\"../media/dice/dice-8.png\" alt=\"D8\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d8\">" + randomNumber(d8) + "</h2>\n\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 3) {
					//	D10
					for (var _j3 = 0; _j3 < types[_i]; _j3++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d10\" src=\"../media/dice/dice-10.png\" alt=\"D10\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d10\">" + randomNumber(d10) + "</h2>\n\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 4) {
					//	D12
					for (var _j4 = 0; _j4 < types[_i]; _j4++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d12\" src=\"../media/dice/dice-12.png\" alt=\"D12\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d12\">" + randomNumber(d12) + "</h2>\n\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 5) {
					//	D20
					for (var _j5 = 0; _j5 < types[_i]; _j5++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<img class=\"d20\" src=\"../media/dice/dice-20.png\" alt=\"D20\">\n\t\t\t\t\t\t\t\t<h2 class=\"number-d20\">" + randomNumber(d20) + "</h2>\n\t\t\t\t\t\t\t\t</li>";
					}
				}
				if (_i === 6) {
					//	D100 (2 D10's)
					for (var _j6 = 0; _j6 < types[_i]; _j6++) {
						value += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"d100-collection\">\n\t\t\t\t\t\t\t\t\t<img class=\"d100\" src=\"../media/dice/dice-10.png\" alt=\"D10\">\n\t\t\t\t\t\t\t\t\t<img class=\"d100\" src=\"../media/dice/dice-10.png\" alt=\"D10\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"number-d100-1\">" + randomNumber(d10) + "</h2>\n\t\t\t\t\t\t\t\t\t<h2 class=\"number-d100-2\">" + randomNumber(d10) + "</h2>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>";
					}
				}
			}
		}

		// end html element and show it on the screen
		value += "</ul>";
		$("#dice-section").html(value);

		// scroll screen down to show results
		var result = document.getElementById("dice-section");
		result.scrollIntoView();
	}
});

// reset the number of each dice to zero when reset button pressed
$('#reset-btn').on("click", function (event) {
	$('.info input[name="d4"]').val(0);
	$('.info input[name="d6"]').val(0);
	$('.info input[name="d8"]').val(0);
	$('.info input[name="d10"]').val(0);
	$('.info input[name="d12"]').val(0);
	$('.info input[name="d20"]').val(0);
	$('.info input[name="d100"]').val(0);
});