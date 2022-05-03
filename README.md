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

### Inheritance vs Composition
Inheritance - Inheritance in the case of this app refers to the abstract class CsvFileReader within the inheritance folder. The parent class has some core functionality that can be extended to child classes like MatchReader. MatchReader would have customized behavior. Inheritance is characterised by an 'is a' relationship between two classes. ex. MatchReader IS A CsvFileReader

Composition - in this case refers to the interface DataReader. MatchReader meets the requirements of said interface, then anytime we call the load method, the action is delegated to an outside CsvFileReader. Composition is characterized by a 'has a' relationship between two classes. ex. MatchReader has a reference to an outside object.