const trianglePat = require("./trianglePat");
const count = require("./countArr");
const multOdd = require("./multOddNum");
const tabelMult = require("./multTable");
const mkRentang = require("./mkRentang");

module.exports = {
    triangle: trianglePat.triangle,
    countArray: count.countArray,
    triangleVert: trianglePat.triangleVert,
    processNumbers: multOdd.processOdd,
    cetakTabel: tabelMult.cetakMeja,
    buatRentang: mkRentang.buatRentang
};
