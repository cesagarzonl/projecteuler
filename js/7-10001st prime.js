const ssssss = (nus) =>{

let sss = 1

for (let i = 3; i <= 10000000; i+=2) {

			for (let x = 2; x < i; x++) {

			if (i % x === 0) {
			break
			}else if (x === i -1){
			sss++
			}
			if (sss === nus) {
			return i
			}
		}
}
}
alert(ssssss(10001))

//100001
//104743
//043759
//23941




//ciiu   4791