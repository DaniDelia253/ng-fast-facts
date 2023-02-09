import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css'],
})
export class SettingsModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  opperations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit();
  }
}
