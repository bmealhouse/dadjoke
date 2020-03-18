module.exports = jokeText => {
  const splitTokens = ['? ']

  for (const splitToken of splitTokens) {
    let jokeParts = jokeText.split(splitToken)

    if (jokeParts.length === 2) {
      return {
        jokeText: `${jokeParts[0]}${splitToken}`.trim(),
        punchlineText: jokeParts[1].trim(),
      }
    }
  }

  return {
    jokeText,
    punchlineText: null,
  }
}
