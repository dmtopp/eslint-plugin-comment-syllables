/*
 * cleans and parses multiline comments
 * example input:
 *  /*
 *   * here is a
 *   * comment
 *   *\/
 * output:
 *  [
 *    ['here', 'is', 'a'],
 *    ['comment']
 *  ]
 */

const toNestedArray = (comment) =>
  comment.value
    .split("\n")
    .map((line) => line.trim().split(/\W/g).filter(Boolean))
    .filter((line) => line.length > 0);

module.exports = toNestedArray;
