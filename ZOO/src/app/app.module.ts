import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PriceComponent } from './price/price.component';
import { EventsComponent } from './events/events.component';
import { InfoComponent } from './info/info.component';
import { ConcactComponent } from './concact/concact.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PriceComponent,
    EventsComponent,
    InfoComponent,
    ConcactComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
