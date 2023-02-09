import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { FactGeneratorService } from '../services/fact-generator.service';
import { ImageGeneratorService } from '../services/image-generator.service';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css'],
})
export class FactComponent implements OnInit {
  currentAnswer: string;
  fact;

  constructor(private imageGeneratorService: ImageGeneratorService) {
    this.fact = FactGeneratorService.generateNewFact();
    this.currentAnswer = '';
  }

  ngOnInit(): void {
    console.log(this.fact.answer);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    switch (event.key) {
      case 'Backspace':
        if (this.currentAnswer.length > 0) {
          this.currentAnswer = this.currentAnswer.slice(
            0,
            this.currentAnswer.length - 1
          );
        }
        break;
      case 'Enter':
        let status = '';
        if (this.currentAnswer === this.fact.answer.toString()) {
          status = 'correct';
          this.fact = FactGeneratorService.generateNewFact();
        } else {
          status = 'incorrect';
        }
        this.imageGeneratorService.questionAnswered.emit(status);
        this.currentAnswer = '';
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        this.currentAnswer = this.currentAnswer + event.key;
        break;
    }
  }
}
