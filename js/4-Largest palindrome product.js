var total = 0;

function test_palindrome(test){
  total = 0;
  test = test.toString();
  
  for (i = 0; i <= test.length-1; i++){
    if (test.charAt(i) == test.charAt(test.length - i-1)){ 
      total += 1;
      }
  }
  if (test.length == total)
    return test;
  else
    return 0;
}

var largest = 0;

for (a = 100; a <= 999; a++){
  for (b = a; b<= 999; b++){
    if (largest < parseInt(test_palindrome(a*b)))
      largest = parseInt(test_palindrome(a*b));
  }
}
document.write(largest);