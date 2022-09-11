import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NameDialogComponent } from './home/components/name-dialog/name-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { WaiterComponent } from './home/components/waiter/waiter.component';
import { MatSelectModule } from '@angular/material/select';
import { AlkuruokaComponent } from './home/components/alkuruoka/alkuruoka.component';
import { PaaruokaComponent } from './home/components/paaruoka/paaruoka.component';
import { JalkipalaComponent } from './home/components/jalkipala/jalkipala.component';
import { PalvelutComponent } from './home/components/palvelut/palvelut.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameDialogComponent,
    WaiterComponent,
    AlkuruokaComponent,
    PaaruokaComponent,
    JalkipalaComponent,
    PalvelutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
