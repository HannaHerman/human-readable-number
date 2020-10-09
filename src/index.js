module.exports = function toReadable (number) {
  let numberName = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  let numberTen = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'
  ];
  if (typeof number === 'number') {
    number = number.toString().split('');
    let result = [];
    while (number.length > 0) {
      if (number.length > 3) {
        result.push('Слишком большое число');
        number = number.splice();
      }
      else if (number.length === 3) {
        result.push(numberName[number[0]] + ' hundred');
        number.shift();
      }
      else if (number.length === 2) {
        if (number[0] == 0) {
          number.shift();
        }
        else if (number[0] == 1) {
          result.push(numberName[1 + number[1]]);
          number = number.splice();
        }
        else {
          result.push(numberTen[number[0]]);
          number.shift();
        }
      }
      else if (number.length === 1) {
        if (result.length > 0 && number[0] == 0) {
          number.shift();
        }
        else {
          result.push(numberName[number[0]]);
          number.shift();
        }
      }
    }
    return result.join(' ');
  }
  else {
    return 'Введите число';
  }    
}
