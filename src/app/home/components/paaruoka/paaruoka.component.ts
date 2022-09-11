import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paaruoka',
  templateUrl: './paaruoka.component.html',
  styleUrls: ['./paaruoka.component.scss'],
})
export class PaaruokaComponent implements OnInit {
  @Output() newPaaruoka = new EventEmitter<string[]>();
  paaruokaList = [
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
  ];
  paaruokaForm = new FormGroup({
    paaruuat: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(): void {
    console.log(this.paaruokaForm.get('paaruuat')?.value);
    this.newPaaruoka.emit(this.paaruokaForm.get('paaruuat')?.value);
  }
}
