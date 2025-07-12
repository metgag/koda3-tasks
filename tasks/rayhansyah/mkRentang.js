function buatRentang(start, end) {
    console.log("\n---- No. 6 Make Rentang ----");
    let result = [];

    for (let i = start; i <= end; i++) {
        result[result.length] = i;
    }

    return result.join(",");
}

module.exports = {
    buatRentang
};
