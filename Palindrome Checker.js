function palindrome(str) {
  let palindrome = str.replace(/[^0-9a-z]/gi, '')
  let partOne, partTwo;
  if (palindrome.length % 2) {
    partOne = palindrome.slice(0, Math.floor(palindrome.length / 2) + 1 ).toLowerCase()
    partTwo = palindrome.slice(Math.floor(palindrome.length / 2), palindrome.length).toLowerCase()
    partTwo = partTwo.split('').reverse().join('')
  } else {
    partOne = palindrome.slice(0, palindrome.length / 2).toLowerCase()
    partTwo = palindrome.slice(palindrome.length / 2, palindrome.length).toLowerCase()
    partTwo = partTwo.split('').reverse().join('')
  }
  if(partOne === partTwo) return true
  return false
} 