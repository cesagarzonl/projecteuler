var antes1 = 1
var antes2 = 2
var antes3 = 0
var array = []
var sum = 0

for (var i = 0; i < 4000000; i++) {
	var antes3 = antes2+antes1;
	antes2 = antes3;
	antes1 = antes3-antes1;
	var proceso = antes3%2
	if (proceso == 0 ) {
		if (antes3 <= 4000000) {
				array.push(antes3);
				var sum = antes3+sum
		}else{
		alert(sum+2)
	}
	}
}
