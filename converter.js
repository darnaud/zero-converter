do {
var choice = parseInt(prompt('Entrez un nombre entre 0 et 999: '));
} while ( 1000 < choice && choice <0)


var unit = (choice % 10); 

var decimal = (choice % 100) - unit;

var dcmUnit = (choice % 100); 

var hundred = (choice - (unit + decimal))/100 ;

var numString = '';

var isHundred = true ;

var isDec = false ; 

function scanDigit(arg){

	switch (arg){

		case 0:

			(!isHundred && !isDec)? numString += 'Zero' : isDecimal = true ;
			break;
			
		case 1:
			numString += 'Un-';
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
			numString += 'Onze-';
			break;

		case 12:
			numString += 'Douze-';
			break;

		case 13:
			numString += 'Treize-';
			break;

		case 14:
			numString += 'Quatorze-';
			break;

		case 15:
			numString += 'Quinze-';
			break;

		case 16:
			numString += 'Seize-';
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
			break

		case 71:
			numString += 'Soixante-Onze-';
			break;

		case 72:
			numString += 'Soixante-Douze-';
			break;

		case 73:
			numString += 'Soixante-Treize-';
			break;

		case 74:
			numString += 'Soixante-Quatorze-';
			break;

		case 75:
			numString += 'Soixante-Quinze-';
			break;

		case 76:
			numString += 'Soixante-Seize-';
			break;

		case 80:
			numString += 'Quatre-Vingt-';
			break;

		case 90:
			numString += 'Quatre-Vingt-Dix-';
			break;

		case 91:
			numString += 'Quatre-Vingt-Onze-';
			break;

		case 92:
			numString += 'Quatre-Vingt-Douze';
			break;

		case 93:
			numString += 'Quatre-Vingt-Treize-';
			break;

		case 94:
			numString += 'Quatre-Vingt-Quatorze-';
			break;

		case 95:
			numString += 'Quatre-Vingt-Quinze-';
			break;

		case 96:
			numString += 'Quatre-Vingt-Seize-';
			break;
		
		default:
			scanDigit(decimal);
			scanDigit(unit);

			
	}
}



//alert(hundred + ' ' + decimal + ' ' + unit);

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