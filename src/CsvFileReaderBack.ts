import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';


//initiallizing tuple for custom type
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
    data: MatchData[] = []; // <== matchdata now a property of the class

    constructor (public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
                .split('\n')
                .map((row: string): string[] => {
                    return row.split(',');
                }
            )
            .map((row: string[]): MatchData => { //<== MatchData is used for complex return value
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