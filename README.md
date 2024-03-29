# Wordbind Solver

A solver for the Wordbind puzzle on <https://www.puzzmo.com>

## Usage

```bash
$ node wordbind_solver.js <path/to/dictionary.txt> <word one> <word two> <optional minimum length>

# eg
$ node wordbind_solver.js ./words_alpha.txt obsecrate rosebud 6
```

This also includes a utility to join dictionary files together:

```bash
# Accepts any number of dictionary files, will always output to output.txt
$ node dictionary_joiner.js <path/to/dictionary1.txt> <path/to/dictionary2.txt> <path/to/...>
```

## Word Lists

spelltower list: <https://github.com/stringham/Spell-tower-solver>
wordnik list: <https://github.com/wordnik/wordlist>
words_alpha list: <https://github.com/dwyl/english-words/tree/master>
