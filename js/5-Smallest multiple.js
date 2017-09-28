var mutii = 0 
var ss = 0
for (var i = 1; i < 1000000000; i++) {
	for (var a = 1; a <= 20; a++) {
		mutii = i%a
		if (mutii == 0) {
			ss += 1
			if (ss == 20 ) {
				alert(if)
			}
		}
		else {
			ss = 0
		}
	}
}