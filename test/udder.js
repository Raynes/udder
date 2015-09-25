'use strict';

var assert = require("assert");
var fs = require("fs");
var udder = require('../src/udder').parseUtterances

describe("udder", function() {
  describe("#parseUtterances()", function() {
      it('should parse yams utterances', function() {
        var utterancesRaw = fs.readFileSync("test/utterances.txt").toString();
        var correctUtterances = fs.readFileSync("test/correct-utterances.txt").toString()
        var utterances = udder(utterancesRaw);
        assert.equal(utterances, correctUtterances);
      });
  })
});
