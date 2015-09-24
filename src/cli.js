#!/usr/bin/env node --harmony --harmony_destructuring
'use strict';

let fs = require("fs");
let udder = require("./udder");

let helpDoc = `
udder <command>

A boilerplate generator for Alexa programs!`

function genUtterances(file) {
  return udder(fs.readFileSync(file).toString());
}

let yargs = require("yargs")
  .usage(helpDoc)
  .command("utterances", "Generate utterances from a file.", (yargs) => {
    let {_: [cmd, file]} = yargs
      .usage("\nudder utterances <path/to/utterances.txt>")
      .showHelpOnFail(true)
      .demand(2)
      .argv;

    console.log(genUtterances(file));
  })
  .help('h')
  .alias('h', 'help')
  .showHelpOnFail(true);

let argv = yargs.argv
let command = argv._[0];

switch (command) {
  case 'utterances':
    break;
  default:
    yargs.showHelp();
}
