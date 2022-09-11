import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from './components/name-dialog/name-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name?: string;
  vaatteet?: string[];
  alkuruuat?: string[];
  paaruoka?: string[];
  jalkipala?: string[];
  palvelut?: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openNameDialog();
  }
  setVaatteet(vaatteet: string[]) {
    this.vaatteet = vaatteet;
  }
  setAlkuruoka(alkuruuat: string[]) {
    this.alkuruuat = alkuruuat;
  }
  setPaaruoka(paaruoka: string[]) {
    this.paaruoka = paaruoka;
  }
  setJalkipala(jalkipala: string[]) {
    console.log(jalkipala);
    this.jalkipala = jalkipala;
  }
  setPalvelu(palvelu: string) {
    console.log(this.palvelut);
    this.palvelut = palvelu;
  }
  openNameDialog() {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      height: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialogi suljettu');
      this.name = result;
      console.log(result);
    });
  }
}
