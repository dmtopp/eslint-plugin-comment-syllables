// https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
// I added a check for <= 2 character words since it was failing on 'be'

const getSyllableCount = (word) => {
  word = word.toLowerCase();

  if (word.length <= 2) {
    return 1;
  }

  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const syl = word.match(/[aeiouy]{1,2}/g);
  if (syl) {
    return syl.length;
  } else {
    return 0;
  }
};

module.exports = getSyllableCount;
