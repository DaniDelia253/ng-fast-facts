import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageGeneratorService {
  @Output() questionAnswered = new EventEmitter();
  firstResponse = ['First question! You got this!'];

  positiveResponses = [
    'YAY! You got it!!!',
    'Right you are!!! :)',
    'You are a WIZ!',
    "NICE!! That's right!!",
    'Amazing job!!',
  ];

  negativeResponses = [
    'Not quite... try again!',
    'Try that one again!',
    'Nope! Think about it and try again!',
  ];

  constructor(private http: HttpClient) {}

  generateCatImgSrcWSaying(status: string) {
    switch (status) {
      case 'correct':
        return (
          'https://cataas.com/cat/says/' +
          this.positiveResponses[
            Math.floor(Math.random() * this.positiveResponses.length)
          ]
        );
      case 'incorrect':
        return (
          'https://cataas.com/cat/says/' +
          this.negativeResponses[
            Math.floor(Math.random() * this.negativeResponses.length)
          ]
        );
      default:
        return (
          'https://cataas.com/cat/says/' +
          this.firstResponse[
            Math.floor(Math.random() * this.firstResponse.length)
          ]
        );
    }
  }
}
