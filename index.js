/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "Rayhan Syahputra"
 */

// import your tasks here
const rayhansyah = require("./tasks/rayhansyah");

function tasksRayhan() {
    // Program: Triangle Pattern
    // Success
    const triangleResult = rayhansyah.triangle(5);
    console.log(triangleResult);

    // Failed
    try {
        const result = rayhansyah.triangle("abc");
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }

    // Program: Count Array
    const countResult = rayhansyah.countArray([1, 2, 3, 4, 5]);
    console.log(countResult);

    // Program: Triangle Pattern Vertical
    // Success
    const triangleVertResult = rayhansyah.triangleVert(5);
    console.log(triangleVertResult);

    // Failed
    try {
        const result = rayhansyah.triangleVert("abc");
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }

    // Program: Multiply Odd Numbers
    // Success
    const processNumbersResult = rayhansyah.processNumbers([1, 2, 3, 4, 5]);
    console.log(processNumbersResult);

    // Failed
    const processNumbersEven = rayhansyah.processNumbers([2, 4, 6, 8]);
    console.log(processNumbersEven);

    // Program: Multiplication Table
    // Success
    const cetakTabelResult = rayhansyah.cetakTabel(3);
    console.log(cetakTabelResult);

    // Failed
    try {
        const result = rayhansyah.cetakTabel("abc");
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }

    // Program: Make Rentang
    const buatRentangResult = rayhansyah.buatRentang(1, 5);
    console.log(buatRentangResult);
}

tasksRayhan();
