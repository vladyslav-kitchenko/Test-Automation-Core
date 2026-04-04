'number' + 3 + 3 // number33 - concatenation
null + 3 // 3 - numeric conversion
5 && "qwerty" // qwerty - logical AND
+'40' + +'2' + "hillel" // 42hillel - numeric conversion + concatenation
'10' - 5 === 6 // false - numeric conversion + comparison
true + false // 1 - boolean to number
'4px' - 3 // NaN - invalid numeric conversion
'4' - 3 // 1 - numeric conversion
'6' + 3 ** 0 // 61 - exponentiation + concatenation
12 / '6' // 2 - numeric conversion
'10' + (5 === 6) // 10false - concatenation
null == '' // false - comparison
3 ** (9 / 3) // 27 - exponentiation
!!'false' == !!'true' // true - boolean conversion + comparison
0 || '0' && 1 // 1 - logical OR + AND
(+null == false) < 1 // true - numeric + boolean comparison
false && true || true // true - logical AND + OR
false && (false || true) // false - logical AND + OR
(+null == false) < 1 ** 5 // true - numeric + boolean comparison + exponentiation