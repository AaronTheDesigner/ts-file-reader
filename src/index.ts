import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";


const reader = new CsvFileReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch)

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

let manUnitedWins = 0;

for (let match of reader.data) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { 
        manUnitedWins ++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { 
        manUnitedWins ++
    }
}

console.log(`Man United won ${manUnitedWins} games`)

//Generics notes

const addOne = (a: number): number => {
    return a + 1;
};
                                                //<== how generics work inside functions
const add = (a: number, b: number): number => {
    return a + b;
}



