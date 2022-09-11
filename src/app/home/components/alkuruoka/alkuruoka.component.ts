import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alkuruoka',
  templateUrl: './alkuruoka.component.html',
  styleUrls: ['./alkuruoka.component.scss'],
})
export class AlkuruokaComponent implements OnInit {
  @Output() newAlkuruoka = new EventEmitter<string[]>();
  alkuruokaList = [
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
    'Mietinnän alla',
  ];
  alkuruokaForm = new FormGroup({
    alkuruuat: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(): void {
    console.log(this.alkuruokaForm.get('alkuruuat')?.value);
    this.newAlkuruoka.emit(this.alkuruokaForm.get('alkuruuat')?.value);
  }
}
