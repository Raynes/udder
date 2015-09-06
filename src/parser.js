function parseText(text, parsed) {
  let acc = "";
  for (var i = 0; i < text.length; i++) {
    let ch = text[i];
    if (ch !== '{') {
      acc += ch;
    } else {
      if (acc.length) parsed.push({type: 'text', value: acc});
      return parseSlot(text.slice(i, text.length), parsed)
    }
  }

  if (acc.length) parsed.push({type: 'text', value: acc});

  return parsed;
}

function parseSlot(text, parsed) {
  let openBracketCount = 0;
  let acc = "";
  for (var i = 0; i < text.length; i++) {
    let ch = text[i];
    switch (ch) {
      case '{':
        openBracketCount++;
        break;
      case '}':
        openBracketCount--;
        if (openBracketCount === 0) {
          parsed.push({type: 'slot', value: acc});
          return parseText(text.slice(i+1, text.length), parsed);
        }
        break;
      default:
        acc += ch;
        break;
    }
  }
}

function testParser(utterance) {
  console.log(`Utterance: ${utterance}`);
  console.log(parseText(utterance, []));
  console.log("\n\n")
}

testParser("hi there {foo|Bar} broseph");
testParser("{what|IsGoingOn}");
testParser("{what|IsGoingOn} out there");
testParser("what {is|GoingOn}");
testParser("{what|IsGoingOn} out {there|Place}");
