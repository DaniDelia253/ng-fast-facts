import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactGeneratorService {
  static signOptions = ['+', '-', 'x', '÷'];

  static generateNewFact() {
    do {
      var fact = {
        topNum: Math.floor(Math.random() * 13),
        bottomNum: Math.floor(Math.random() * 13),
        sign: this.signOptions[
          Math.floor(Math.random() * this.signOptions.length)
        ],
        answer: 0,
      };

      switch (fact.sign) {
        case '+':
          fact.answer = fact.topNum + fact.bottomNum;
          break;
        case '-':
          fact.answer = fact.topNum - fact.bottomNum;
          break;
        case 'x':
          fact.answer = fact.topNum * fact.bottomNum;
          break;
        case '÷':
          fact.answer = fact.topNum / fact.bottomNum;
          break;
      }
    } while (
      fact.answer !== Math.floor(fact.answer) ||
      fact.answer < 0 ||
      fact.answer === Infinity
    );

    return fact;
  }
}
