function telephoneCheck(str) {
  let telRegEx = /^(1\s?)?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?\d{4}$/
  console.log(telRegEx.test(str))
  return telRegEx.test(str)

}

telephoneCheck("(6054756961)");