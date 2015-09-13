export default function parseUtterance(utterance) {
  let output = [];

  for (var i = 0; i < utterance.length; ++i) {
    if (utterance[i] == '{') {
      let [expanded, pos] = parseSlot(utterance, i + 1);
      output.push(expanded);
      i = pos;
    } else {
      let [text, pos] = parseText(utterance, i);
      output.push({type: "string", value: text});
      i = pos - 1;
    }
  }

  return explode(output);
}

function explode(flat) {
  let outputs = [''];

  flat.forEach((part) => {
    switch(part.type) {
    case 'string':
      for (var i = 0; i < outputs.length; ++i)
        outputs[i] += part.value;
      break;

    case 'slot':
      let newOutputs = [];

      outputs.forEach(output => {
        part.choices.forEach(choice => {
          let expanded;

          if (part.slotType) {
            expanded = `{${choice}|${part.slotType}}`;
          } else {
            expanded = `${choice}`;
          }

          newOutputs.push(output + expanded);
        });
      });

      outputs = newOutputs;
      break;

    default:
      throw 'WHAT. Got ${part.type}, no clue what to do.';
    }
  });

  return outputs;
}

function parseText(utterance, position) {
  let text = "";

  for (var i = position; i < utterance.length; ++i) {
    // check for any special cut chars
    if (['{', '}', ',', '|'].indexOf(utterance[i]) !== -1) {
      return [text, i];
    }

    text += utterance[i];
  }

  return [text, i];
}

function parseSlot(utterance, position) {
  let slotChoices = [];
  let slotType;

  for(var i = position; i < utterance.length; ++i) {
    let [text, pos] = parseText(utterance, i);
    slotChoices.push(text);
    i = pos;

    switch (utterance[pos]) {
    case ',': break;
    case '}':
      return [{type: "slot", choices: slotChoices, slotType: slotType}, i];
    case '|':
      [slotType, pos] = parseText(utterance, i + 1);

      if (utterance[pos] !== '}') {
        syntaxError(utterance, pos, 'no closing brace for slot');
      }

      return [{type: "slot", choices: slotChoices, slotType: slotType}, pos];
    default:
      syntaxError(utterance, pos, 'unexpected input');
    }
  }

  syntaxError(utterance, position, "no closing brace for slot");
}


function syntaxError(utterance, position, message) {
  console.log('Syntax Error:', message);
  console.log(utterance);
  let marker = "";
  for (var i = 0; i < position - 1; ++i) marker += "~";
  console.log(marker + '^');
  throw 'syntax error';
}
