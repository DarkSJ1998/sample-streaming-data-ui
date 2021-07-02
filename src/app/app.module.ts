import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppBodyComponent } from './components/app-body/app-body.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppBodyComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
