/**
 * @fileoverview Checks that multiline comments are haikus
 * @author D. Topp
 */
"use strict";

const commentToNestedArray = require("../commentToNestedArray");
const countArraySyllables = require("../countArraySyllables");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Checks that multiline comments are haikus",
      category: "Just for fun",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      Program() {
        sourceCode.getAllComments().forEach((comment) => {
          if (comment.type === "Block") {
            const arrayOfLines = commentToNestedArray(comment);

            if (arrayOfLines.length != 3) {
              context.report({
                loc: comment.loc,
                message: `A haiku should have only three lines. Found ${arrayOfLines.length}`,
              });
            } else {
              const firstLineSyllables = countArraySyllables(arrayOfLines[0]);
              const secondLineSyllables = countArraySyllables(arrayOfLines[1]);
              const thirdLineSyllables = countArraySyllables(arrayOfLines[2]);

              if (firstLineSyllables !== 5) {
                context.report({
                  loc: comment.loc,
                  message:
                    `The first line of a haiku should have five syllables. Found: ${firstLineSyllables}`,
                });
              }

              if (secondLineSyllables !== 7) {
                context.report({
                  loc: comment.loc,
                  message:
                    `The second line of a haiku should have seven syllables. Found: ${secondLineSyllables}`,
                });
              }

              if (thirdLineSyllables !== 5) {
                context.report({
                  loc: comment.loc,
                  message:
                    `The third line of a haiku should have five syllables. Found: ${thirdLineSyllables}`,
                });
              }
            }
          }
        });
      },
    };
  },
};
