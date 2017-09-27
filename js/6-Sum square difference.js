var sum = 0
var sum2 = 0
var solucion = 0
for (var i = 1; i <= 100; i++) {
	var milty = i*i
	sum = sum + milty
	if (i == 100 ) {
		alert(sum)
	}
}
for (var x = 0; x <= 100; x++) {
	sum2 = sum2 + x
	if (x == 100 ) {
		solucion = sum2*sum2
		alert(sum2)
		sol()
	}
}
function sol () {
solucion = solucion - sum
alert(solucion)
}
//25164150