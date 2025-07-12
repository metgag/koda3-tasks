function cetakMeja(num) {
    console.log("\n---- No. 5 Multiplication Table ----");
    if (
        isNaN(num) ||
         num < 1
    ) {
        throw new Error("parameter harus bertipe data nomor dan harus nomor positif");
    }
    let result = 0;
    let resultDisp = "";

    for (let i = 1; i <= 10; i++) {
        result = i * num;

        resultDisp += `${num} x ${i} = ${result}`;
        if (i < 10) resultDisp += "\n";
    }
    return resultDisp;

}

module.exports = {
    cetakMeja
};
