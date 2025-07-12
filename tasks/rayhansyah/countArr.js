function countArray(arrOfNum) {
    console.log("\n---- No. 2 Count Array ----");
    try {
        if (!(arrOfNum instanceof Array)) {
            throw new Error("input should array of number");
        }

        let result = 1;
        for (let num of arrOfNum) {
            result *= num;
        }
        
        return result;
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    countArray
};
