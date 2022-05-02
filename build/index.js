"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
// for (let match of matches) {
//     if(match[1] === 'Man United' && match[5] === 'H') { // <=== magic tring comparison ('H'). needs to be clarified
//         manUnitedWins ++
//     } else if (match[2] === 'Man United' && match[5] === 'A') { // <=== magic tring comparison ('H'). needs to be clarified
//         manUnitedWins ++
//     }
// }
//constant solution to magic string problem
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D'; // <== unused values are often deleted, even if they may be used at a later time
// another javascript soultion to magic string problem
// let MatchResult = { // <== objects have many purposes
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// };
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
