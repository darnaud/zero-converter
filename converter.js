





var choice = parseInt(prompt('Entrez un nombre entre 0 et 999: '));

var unit = (choice % 10); 

var decimal = (choice % 100) - unit; 

var hundred = choice - (unit + decimal);

var numString = '';

function scanDigit(arg){

	switch (arg){

		case 0:
		
			numString += 'Zero';
			break;
			
		case 1:
			numString += 'Un';
			break;
			
		case 2:
			numString += 'Deux';
			break;
			
		case 3:
			numString += 'Trois';
			break;
			
		case 4:
			numString += 'Quatre';
			break;
			
		case 5:
			numString += 'Cinq';
			break;
		
		case 6:
			numString += 'Six';
			break;
		
		case 7:
			numString += 'Sept';
			break;
		
		case 8:
			numString += 'Huit';
			break;
		
		case 9:
			numString += 'Neuf';
			break;
		
		default:
			alert('Ce nombre ne fait pas partie de l\'intervalle specifié!');
			
	}
}

scanDigit(choice);

alert(choice + ' : ' + numString);

alert(hundred + ' ' + decimal + ' ' + unit);

//Identify hundred

