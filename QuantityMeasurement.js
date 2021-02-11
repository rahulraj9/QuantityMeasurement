let v = require('../ConversionLogic/Conversion')
var readlineSync = require('readline-sync')


class UserOperation {

    choiceForMeasuremnt() {
        let measurementChoice;
        while (measurementChoice != 'e') {
            console.log(`Choose Measurement Operation
        1.Length\t-->Press L
        2.Volume\t-->Press V
        3.Temperature\t-->Press T
        4.Exit\t-->press E`)

            measurementChoice = readlineSync.question('enter your choice:- ');

            switch (measurementChoice) {

                /**For Length Conversion */
               
                case 'L':
                    console.log(`------------------------------------
                For Meter\t-->Press m
                For Feet\t-->Press ft
                For CentiMeter\t-->Press cm
                For Kilometer\t-->Press km
                ----------------------------------------------------------------------------------------`)
                    let lUnit1 = readlineSync.question('enter measurement unit FROM you want to convert\t');
                    let lUnit2 = readlineSync.question('enter measurement unit TO you want to convert\t');
                    let lData = readlineSync.question('enter data you want to convert ' + lUnit1 + " to " + lUnit2 + " ");
                    v.conversion(lUnit1, lUnit2, lData);

                    break;

                /**For Volume Conversion */
               
                case 'V':
                    console.log(`------------------------------------
                    For Liter Press li
                    For Gallon Press g
                    For MilliLitter Press ml
                    ----------------------------------------------------------------------------------------`)
                    let vUnit1 = readlineSync.question('enter measurement unit FROM you want to convert\t');
                    let vUnit2 = readlineSync.question('enter measurement unit TO you want to convert\t');
                    let vData = readlineSync.question('enter data you want to convert ' + vUnit1 + " to " + vUnit2 + " ");
                    v.conversion(vUnit1, vUnit2, vData);
                    break;
                /**For Temperature Conversion */
               
                case 'T':
                    console.log(`------------------------------------
                    For Celcius Press c 
                     For farenheit Press f
                     ----------------------------------------------------------------------------------------`)
                    let tUnit1 = readlineSync.question('enter measurement unit FROM you want to convert\t');
                    let tUnit2 = readlineSync.question('enter measurement unit TO you want to convert\t');
                    let tData = readlineSync.question('enter data you want to convert ' + tUnit1 + " to " + tUnit2 + " ");
                    v.conversion(tUnit1, tUnit2, tData);
                    break;

                case 'e':
                    console.log("Thanks to using Conversion Tools");
                    break;

                default:
                    console.log("Not a valid unit");
            }
        }
    }
}
let classObject = new UserOperation();
classObject.choiceForMeasuremnt();
