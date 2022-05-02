import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

//initiallizing tuple for custom type
type MatchData = [Date, string, string, number, number, MatchResult, string];


export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // <== type assertion. defines data as one of the types from the enum
            row[6]
        ];
    }
}