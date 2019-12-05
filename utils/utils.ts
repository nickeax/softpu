import { Conversions } from './conversions';
import { Constants } from './constants';

export class Utils {  
  cons = new Constants();
  buildBinary (i: number): string {
    if(i >= 255) {
      return `11111111`;
    }
  }

  padOutput(str) {
    if (!str) return;
    let tmpArr = [];
    tmpArr = tmpArr.map(x => {
      if (x.length < 8) {
        return (x = this.append(x, "0", this.cons.BYTE - x.length));
      } else return x;
    });
    return tmpArr.join(".");
  }

  append(str, ch, amount) {
    for (let i = 0; i < amount; i++) {
      str += ch;
    }
    return str;
  }  
}
