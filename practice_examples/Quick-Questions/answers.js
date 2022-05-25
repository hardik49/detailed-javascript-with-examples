/* 
  1) false, because prefix by 0 it donated as octal value.
    Infact, 015 === 13. To convert and match it with 15 what you can do.

    Solution:
    Number(015.toString(8)) === 15

    .toString(8); passing 8 means convert octal value to original

  2) [] + 1 + 2 - 3 === 9
  By concatinating with [], will return "" and concate 1 + 2 resulting "12"
  By sustracting will convert back to number and substract value from it.
  Hence "12" - 3 = 9

  3) "b" > "a" === true
  Based on ASCII value

  4) 0 && false === 0
*/