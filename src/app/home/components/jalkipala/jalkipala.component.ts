import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jalkipala',
  templateUrl: './jalkipala.component.html',
  styleUrls: ['./jalkipala.component.scss'],
})
export class JalkipalaComponent implements OnInit {
  @Output() newJalkipala = new EventEmitter<string[]>();
  jalkiruokaList = [
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
  ];
  jalkiruokaForm = new FormGroup({
    jalkiruuat: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(): void {
    console.log(this.jalkiruokaForm.get('jalkiruuat')?.value);
    this.newJalkipala.emit(this.jalkiruokaForm.get('jalkiruuat')?.value);
  }
}
