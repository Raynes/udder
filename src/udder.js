import "babel-core/polyfill";
import parseUtterance from "./parser";
import fs from "fs";

export default function parseUtterances(utterances) {
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
