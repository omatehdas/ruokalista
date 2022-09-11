import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
})
export class WaiterComponent implements OnInit {
  @Output() newVaattet = new EventEmitter<string[]>();
  constructor() {}
  vaattetList = [
    'Kalsarit',
    'Pukuhousut',
    'T-paita',
    'Kauluspaita',
    'Pukutakki',
    'Sukat',
    'Alasti kiitos.',
  ];
  waiterForm = new FormGroup({
    vaatteet: new FormControl(''),
  });
  ngOnInit(): void {}
  onFormSubmit(): void {
    console.log(this.waiterForm.get('vaatteet')?.value);
    this.newVaattet.emit(this.waiterForm.get('vaatteet')?.value);
  }
}
