// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // using building methods
  // const arr = str.split('')
  // return arr.reverse().join('')

  let result = '';
  for (let character of str) {
    result = character + result;
  }
  return result
}

module.exports = reverse;
