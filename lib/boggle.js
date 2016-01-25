'use strict';

const boggle = function boggle(tray, coordinatepairs) {
    let words = '';
    for (let i = 0; i < coordinatepairs.length; i++){
        let getIndex = coordinatepairs[i][0] * 4 + coordinatepairs[i][1];
        words += tray[getIndex];
    }
    return words;
};

const bigBoggle = function bigBoggle(tray, coordinatepairs) {
    let words = '';
    for (let i = 0; i < coordinatepairs.length; i++){
        let getIndex = coordinatepairs[i][0] * 5 + coordinatepairs[i][1];
        words += tray[getIndex];
    }
    return words;
};

const superBigBoggle = function superBigBoggle(tray, coordinatepairs) {
    let words = '';
    for (let i = 0; i < coordinatepairs.length; i++){
        let getIndex = coordinatepairs[i][0] * 6 + coordinatepairs[i][1];
        words += tray[getIndex];
    }
    return words;
};


module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
