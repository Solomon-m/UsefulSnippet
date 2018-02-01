const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n 

// validateNumber(1) --> true
// validateNumber('hello') --> false