import { Constants } from './constants';

export class Conversions {
  consts = new Constants();
  dec2bin(num) {
    let binaryArr = [];
    if (parseInt(num) === 0) return 0;
    while (num > 0) {
      binaryArr.unshift("" + (num % 2));
      num -= num % 2;
      num /= 2;
    }
    return binaryArr.join("");
  }

  toDecimal(b) {
    let dec = 0;
    let d = b
      .split("")
      .reverse()
      .join("");
    console.log(`d ${d}`);
    for (let i = 0; i < d.length; i++) {
      if (parseInt(d[i]) === 1) {
        dec += this.consts.binPlaceArr[i];
      }
    }
    return dec;
  }
}