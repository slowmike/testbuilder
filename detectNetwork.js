// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if([16,18,19].indexOf(cardNumber.length) > -1 && /^49(03|05|11|36)|564182|633(110|3)|6759/.test(cardNumber) ) {
    return "Switch";
  }
  if(cardNumber.length === 14 && /^38|39/.test(cardNumber) ) {
    return "Diner's Club";
  }
  if(cardNumber.length === 15 && /^34|37/.test(cardNumber) ) {
    return "American Express";
  }
  if(cardNumber.length === 16 && /^5[1-5]/.test(cardNumber) ) {
    return "MasterCard";
  }
  if([13,16,19].indexOf(cardNumber.length) > -1 && cardNumber[0] === "4" ) {
    //console.log(cardNumber);
    return "Visa";
  }
  if([16,19].indexOf(cardNumber.length) > -1 && /^6(011|4[4-9]|5)/.test(cardNumber) ) {
    return "Discover";
  }
  if(/^\d{12,19}/.test(cardNumber) && /^50(18|20|38)|6304/.test(cardNumber) ) {
    return "Maestro";
  }
  if(/^\d{16,19}/.test(cardNumber) && /^622(1(2[6-9]|[3-9])|[2-8]|9([0-1]|2[0-5]))|62[4-6]|628[2-8]/.test(cardNumber) ) {
    return "China UnionPay";
  }

};
