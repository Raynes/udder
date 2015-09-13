var assert = require("assert");
var udder = require("../lib/udder.js");
var fs = require("fs");

describe("udder", function() {
    describe("#parseUtterances()", function() {
        it('should parse yams utterances', function() {
          var utterancesRaw = fs.readFileSync("tests/utterances.txt").toString();
          var correctUtterances = fs.readFileSync("tests/correct-utterances.txt").toString()
          var utterances = udder(utterancesRaw);
          assert.equal(utterances, correctUtterances);
        });
    })
});
