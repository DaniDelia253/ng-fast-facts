import { Component, OnInit } from '@angular/core';
import { ImageGeneratorService } from '../services/image-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  imageURL = this.imageGeneratorService.generateCatImgSrcWSaying('onFirstLoad');

  constructor(private imageGeneratorService: ImageGeneratorService) {
    imageGeneratorService.questionAnswered.subscribe((status) => {
      this.imageURL = imageGeneratorService.generateCatImgSrcWSaying(status);
    });
  }
}
