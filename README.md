# eslint-plugin-comment-syllables

A for-fun plugin that checks if multiline comments are in a certain format (haiku, iambic pentameter, etc.)

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
