# Load Parse Analyze Report

## 1. Load
* install node js type definition file ```npm install @types/node```
* we need to itterate over all of the different matches / data

## 3. Analyze


### Generics
```
// This is a generic, which allows for different types of data to be passed to a class much like a function argument
class HoldAnything<TypeOfData> { // <== use content inside of brackets <> to initialize
    data: TypeOfData; // <== initilize
}

const holdNumber = new HoldAnything<number>(); // <== identify type in new intance
holdNumber.data = 7893214

const holdString = new HoldAnything<string>();
holdString.data = "string"

const holdArrayOfStrings = new HoldAnything<string[]>();
holdArrayOfStrings.data = ["djfka","jfkdlsaf","djksau"]
```