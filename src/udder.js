'use strict';

/**
 * Exposed high level library functions!
 */
let parseUtterance = require("./parser").parseUtterance;
let fs = require("fs");

/**
 * Parse templated utterances from a string.
 */
module.exports.parseUtterances = function parseUtterances(utterances) {
  let lines = utterances.split('\n');
  let result = "";
  let generated = lines
    .filter(utterance => utterance)
    .forEach(utterance => {
      let [intent, ...words] = utterance.split(' ');
      let text = words.join(' ');
      result += parseUtterance(text).map(s => `${intent} ${s}`).join('\n');
      result += '\n';
    })

  return result;
}
