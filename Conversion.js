class Conversion {
    conversion(lunit1, lunit2, data) {

        switch (lunit1) {
            case 'm':
                switch (lunit2) {

                    case 'cm':
                        let cmResult = data * 100;
                        console.log(`${data} m = ${cmResult} cm`);
                        return cmResult;

                    case 'ft':
                        let ftResult = data * 3.281;
                        console.log(`${data} m = ${ftResult} ft`);
                        return ftResult;

                    case 'km':
                        let kmResult = data / 1000;
                        console.log(`${data} m = ${kmResult} km`);
                        return kmResult;

                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                return ;
            case 'cm':
                switch (lunit2) {

                    case 'm':
                        let mResult = data / 100;
                        console.log(`${data} cm = ${mResult} m`);
                        return mResult;

                    case 'ft':
                        let ftResult = data / 30.48;
                        console.log(`${data} cm = ${ftResult} ft`);
                        return ftResult;

                    case 'km':
                        let cmResult = data / 100000;
                        console.log(`${data} cm = ${cmResult} km`);
                        return cmResult;

                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                return ;
            case 'ft':
                switch (lunit2) {

                    case 'm':
                        let mResult = data / 3.281;
                        console.log(`${data} ft = ${cmResult} m`);
                        return ;

                    case 'cm':
                        let ftResult = data * 30.48;
                        console.log(`${data} ft = ${ftResult} cm`);
                        return ;

                    case 'km':
                        let cmResult = data / 3281;
                        console.log(`${data} ft = ${cmResult} km`);
                        return ;

                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                return ;
            case 'km':
                switch (lunit2) {

                    case 'm':
                        let mResult = data * 1000;
                        console.log(`${data} km = ${mResult} m`);
                        return mResult;

                    case 'cm':
                        let ftResult = data * 100000;
                        console.log(`${data} km = ${ftResult} cm`);
                        return ftResult;

                    case 'ft':
                        let cmResult = data * 3281;
                        console.log(`${data} km = ${cmResult} ft`);
                        return cmResult;

                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                break;

            case 'c':
                switch (lunit2) {

                    case 'f':
                        let cResult = (data * 1.8000) + 32.00;
                        console.log(`${data} °C = ${cResult} °F`);
                        return cResult ;
                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                break ;
            case 'f':
                switch (lunit2) {

                    case 'c':
                        let fResult = (data - 32) / 1.8000;
                        console.log(`${data} °F = ${fResult} °C`);
                        return fResult;
                    default:
                        console.log("unit is not valid enter proper unit");
                        return false;
                }
                return ;
            case 'li':
                switch (lunit2) {
                    case 'g':
                        let liresu = data / 3.785;
                        console.log(`${data} li = ${liresu} g`);
                        return liresu ;
                    case 'ml':
                        let mlres = data * 1000;
                        console.log(`${data} li = ${mlres} ml`);
                        return mlres ;
                    default:
                        console.log("Wrong Data")
                        return false;
                }
                return ;
            case 'g':
                switch (lunit2) {
                    case 'li':
                        let ligresu = data * 3.785;
                        console.log(`${data} g = ${ligresu} li`);
                        return ligresu ;
                    case 'ml':
                        let mlgres = data * 3785;
                        console.log(`${data} g = ${mlgres} ml`);
                        return mlgres;
                    default:
                        console.log("Wrong Data")
                        return false;
                }
                return ;
            case 'ml':
                switch (lunit2) {
                    case 'g':
                        let gmlresu = data / 3785;
                        console.log(`${data} ml = ${gmlresu} g`);
                        return gmlresu;
                    case 'li':
                        let mllires = data / 1000;
                        console.log(`${data} ml = ${mllires} li`);
                        return mllires;
                    default:
                        console.log("Wrong Data")
                        return false;
                }
                return ;

            default:
               // console.log("not valid unit");
                return false;

        }


    }

}
let co = new Conversion();

module.exports = new Conversion();
