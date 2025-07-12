function processOdd(arrOfNum) {
    console.log("\n---- No. 4 Count Odd Numbers ----");
    let result = 1;

    for (let i of arrOfNum) {
        if (i % 2 === 1) {
            result *= i;
        }
    }

    return result;
}

module.exports = {
    processOdd
};
