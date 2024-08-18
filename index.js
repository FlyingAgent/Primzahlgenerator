const myArg = process.argv[2];
const tries = myArg;
var counter = 0;
var divideCounter = 0;
var startTime = performance.now();
var primnumbers = [];
var primenumberCount = 0;

var counter = tries
while(counter > 1) {
    console.log("Aktuelle Zahl in Bearbeitung: " + counter);
    var divideCounter = counter - 1;
    while (divideCounter >= 1) {
        var currentDivide = counter / divideCounter;
        if (Number.isInteger(currentDivide)) {
            if (divideCounter == 1) {
                var primnumbers = counter + " " + primnumbers;
                var primenumberCount = primenumberCount + 1;
                var counter = counter - 1;
                var divideCounter = 0;
            } else {
                var counter = counter - 1;
                var divideCounter = 0;
            }
        } else {
            var divideCounter = divideCounter - 1;
        }
    }
}
var primnumbers = 1 + " " + primnumbers;
var primenumberCount = primenumberCount + 1;

var endTime = performance.now();
console.log("Es wurden folgende Primzahlen gefunden: "+ primnumbers)
console.log(`In ${(endTime - startTime) / 1000} Sekunden wurden von den Zahlen 1 bis ${tries} ${primenumberCount} Primzahlen gefunden.`); 