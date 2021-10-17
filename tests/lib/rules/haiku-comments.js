/**
 * @fileoverview Checks that multiline comments are haikus
 * @author D. Topp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/haiku-comments"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("haiku-comments", rule, {
  valid: [
    {
      code: `
      /*
       * once upon a time
       * someone thought that a comment
       * should be a story!
       */
      `,
      errors: [],
    },
  ],

  invalid: [
    {
      code: `
      /*
       * once upon a time
       * someone thought that a comment
       * could be a haiku but they messed up
       */
      `,
      errors: [{ message: "The third line of a haiku should have five syllables. Found: 9", type: null }],
    },
    {
      code: `
      /*
       * once upon a time time
       * someone thought that a comment
       * should be a story!
       */
      `,
      errors: [{ message: "The first line of a haiku should have five syllables. Found: 6", type: null }],
    },
    {
      code: `
      /*
       * once upon a time
       * someone thought that a comment comment
       * should be a story!
       */
      `,
      errors: [{ message: "The second line of a haiku should have seven syllables. Found: 9", type: null }],
    },
    {
      code: `
      /*
       * once upon a time
       * someone thought that a comment
       */
      `,
      errors: [{ message: "A haiku should have only three lines. Found 2", type: null }],
    },
  ],
});
