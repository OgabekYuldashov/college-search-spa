import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegesComponent } from './components/colleges/colleges.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { AgmCoreModule } from '@agm/core';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    CollegesComponent,
    HeaderComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8_5epjDcAbPIwZVp-3N-0y1zze4R27YM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
