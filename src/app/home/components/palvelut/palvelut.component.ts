import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-palvelut',
  templateUrl: './palvelut.component.html',
  styleUrls: ['./palvelut.component.scss'],
})
export class PalvelutComponent implements OnInit {
  @Output() newPalvelu = new EventEmitter<string>();
  palvelutForm = new FormGroup({
    palvelu: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(): void {
    console.log('tahan mennaan');
    this.newPalvelu.emit(this.palvelutForm.get('palvelu')?.value);
  }
}
