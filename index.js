const isValid = (brackets) => {
  if (brackets.length <= 1) { return false }

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < brackets.length; i++) {
    ch = brackets[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }
  return (stack.length === 0)
}

module.exports = {
  isValid
}

console.log(isValid('{}'))
