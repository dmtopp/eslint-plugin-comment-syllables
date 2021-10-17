const getSyllableCount = require("./getSyllableCount");

// input: array of words (['hey', 'there', 'you'])
// output: total syllable count (3)
const countArraySyllables = (inArray) =>
  inArray.reduce((total, next) => total + getSyllableCount(next), 0);

module.exports = countArraySyllables;
