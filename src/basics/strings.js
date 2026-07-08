/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof newWord !== 'string' || typeof needle !== 'string') {
    throw Error
  }

  const matchCasing = (oldWord, newWord) => {
    return newWord
      .substring(0, oldWord.length)
      .split('')
      .map((char, index) => {
        const oldChar = oldWord[index]
        return oldChar === oldChar.toUpperCase()
          ? char.toUpperCase()
          : char.toLowerCase()
      })
      .join('')
  }

  const regex = RegExp(needle, 'gi')
  return haystack
    .split(' ')
    .map((needle) =>
      regex.test(needle) ? matchCasing(needle, newWord) : needle,
    )
    .join(' ')
}
