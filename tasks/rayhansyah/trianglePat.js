exports.triangle = function (num) {
    console.log("\n---- No. 1 Triangle Pattern ----");
    if (
        typeof num !== "number" ||
        num < 1
    ) {
        throw new Error("parameter harus bertipe data nomor dan harus nomor positif");
    }
    let result = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result = result.concat(j);
            if (j < i) result += " ";
        }
        if (i < num) result += "\n";
    }
    return result;
};

exports.triangleVert = function (num) {
    console.log("\n---- No. 3 Triangle Pattern ----");
    if (
        typeof num !== "number"
        || num < 1
    ) {
        throw new Error("parameter harus bertipe data nomor dan harus nomor positif");
    }
    let result = "";
    for (let i = 1; i <= num; i++) {
        for (let j = i; j >= 1; j--) {
            result += j;
            if (j > 1) result += " ";
        }
        if (i < num) result += "\n";
    }
    return result;
};
