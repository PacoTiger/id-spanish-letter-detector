//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"

const result = document.getElementById("result");
const numberDNI = document.getElementById('InputNumbers');

function dniLetter( dni ) {
	var resto = dni%23;
	if (dni <= -1 || dni === (/[A-Z]{1}\d{7}$/)) {
		return "Invalid parameter";
	} 
	else {
	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	return lockup.charAt(resto);
	}
}

function check(e){
	event.preventDefault(e);
	console.log("algo oraro pasasg");
	console.log(numberDNI.value);
	result.innerHTML = "";
	result.append(dniLetter(numberDNI.value));
}

document.getElementById("bttn").addEventListener("click", check);

