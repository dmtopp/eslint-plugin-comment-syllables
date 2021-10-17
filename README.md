# eslint-plugin-comment-syllables

A for-fun plugin that checks if multiline comments are in a certain format (haiku, iambic pentameter, etc.)

This projects uses a variation on the syllable-counting function in [this stackoverflow thread](https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript).  It turns out that the english language is complicated and counting syllables is hard, so it doesn't always count the correct number of syllables.  It gets close enough for this to be pretty fun though.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-comment-syllables`:

```sh
npm install eslint-plugin-comment-syllables --save-dev
```

## Usage

Add `comment-syllables` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["comment-syllables"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "comment-syllables/haiku-comments": 2
    }
}
```

## Supported Rules

- `comment-syllables/haiku-comments`: checks that multiline comments using `/* */` syntax are haikus
  - checks that multiline comments are 3 lines long
  - checks that the first line has 5 syllables
  - checks that the second line has 7 syllables
  - checks that the third line has 5 syllables
