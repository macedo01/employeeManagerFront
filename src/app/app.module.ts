import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TileComponent } from './components/tile/tile.component';
import { EmployeeService } from './service/employee.service';
import { StandartModalComponent } from './components/modal/standart-modal/standart-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TileComponent, StandartModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
