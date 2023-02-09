import { Component, OnInit } from '@angular/core';
import { ImageGeneratorService } from '../services/image-generator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  bkgColor = 'greenyellow';
  hideModal = true;

  constructor(private imageGeneratorService: ImageGeneratorService) {
    imageGeneratorService.questionAnswered.subscribe((status) => {
      status === 'correct'
        ? (this.bkgColor = 'greenyellow')
        : (this.bkgColor = 'red');
    });
  }

  ngOnInit(): void {}
}
