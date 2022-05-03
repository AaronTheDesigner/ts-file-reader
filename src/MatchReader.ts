import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData'


interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader { 
    matches: MatchData[] = [];

    constructor(public reader: DataReader){}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => { //<== MatchData is used for complex return value
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // <== type assertion. defines data as one of the types from the enum
                row[6]
            ];
        })  
    }
}

