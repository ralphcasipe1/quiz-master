import converter from 'number-to-words'

export const replaceCharacters = (word = '') =>
  word.replace(/-/g, ' ')
    .replace(/,/g, '')

export default (correctAnswer, userAnswer) => {
  if (isNaN(+userAnswer)) {
    let convertedWords = converter.toWords(+correctAnswer)
    
    return replaceCharacters(convertedWords) === replaceCharacters(userAnswer)
  }
  
  return correctAnswer === userAnswer
}