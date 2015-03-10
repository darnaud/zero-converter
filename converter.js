




do {
var choice = parseInt(prompt('Entrez un nombre entre 0 et 999: '));
} while ( !choice)


var unit = (choice % 10); 

var decimal = (choice % 100) - unit;

var dcmUnit = (choice % 100); 

var hundred = (choice - (unit + decimal))/100 ;

var numString = '';

var isHundred = true ;

var isDec = false ;

var isUnit = false;

function scanDigit(arg){

	switch (arg){

		case 0:

			(!isHundred && !isDec)? numString += 'Zero' : isDecimal = true ;
			break;
			
		case 1:
			(isUnit)? numString += 'Et-' : isDecimal = false;
			numString += 'Un';
			break;
			
		case 2:
			numString += 'Deux-';
			break;
			
		case 3:
			numString += 'Trois-';
			break;
			
		case 4:
			numString += 'Quatre-';
			break;
			
		case 5:
			numString += 'Cinq-';
			break;
		
		case 6:
			numString += 'Six-';
			break;
		
		case 7:
			numString += 'Sept-';
			break;
		
		case 8:
			numString += 'Huit-';
			break;
		
		case 9:
			numString += 'Neuf-';
			break;

		case 10:
			numString += 'Dix-';
			break;

		case 11:
			numString += 'Onze';
			break;

		case 12:
			numString += 'Douze';
			break;

		case 13:
			numString += 'Treize';
			break;

		case 14:
			numString += 'Quatorze';
			break;

		case 15:
			numString += 'Quinze';
			break;

		case 16:
			numString += 'Seize';
			break;

		case 20:
			numString += 'Vingt-';
			break;

		case 30:
			numString += 'Trente-';
			break;

		case 40:
			numString += 'Quarante-';
			break;

		case 50:
			numString += 'Cinquante-';
			break;

		case 60:
			numString += 'Soixante-';
			break;

		case 70:
			numString += 'Soixante-Dix-';
			break;

		case 80:
			numString += 'Quatre-Vingt-';
			break;

		case 90:
			numString += 'Quatre-Vingt-Dix-';
			break;
		
		default:
			scanDigit(decimal);
			isUnit = true;
			scanDigit(unit);

			
	}
}


//Identify hundred

isHundred = true ;

scanDigit(hundred);

if (hundred == 1){

	numString = 'Cent-';
}
else if (hundred != 0 && hundred !=1 ){

	numString += 'Cent-';
}

isHundred = false;

//Identify decimal


scanDigit(dcmUnit);

alert(choice + ' : ' + numString);
























