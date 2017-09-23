var multi3 = 3
var multi5 = 5
var sum = 0
var sum3 = 0 

var array = []

for (var i = 1; i < 1000 ; i++) {
	var proceso = i*3 	
	if (proceso <= 1000 ) {
	var sum = proceso+sum
	array.push(proceso); 
	}
	}

for (var x = 1; x < 1000 ; x++) {
	var procesod = x*5
	if (procesod < 1000 ) {
	var sum = procesod+sum
	array.push(procesod); 
	}else {
	
	}
	}
for (var i = 1; i < 1000 ; i++) {
	var proceso = i*15 	
	if (proceso <= 1000 ) {
	var sum3 = proceso+sum3
	array.push(proceso); 
	}else{console.log(sum-sum3)}
	}