import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PriceComponent} from './price/price.component';
import {EventsComponent} from './events/events.component';
import {InfoComponent} from './info/info.component';
import {ConcactComponent} from './concact/concact.component';
import {NaviComponent} from './navi/navi.component';

const routes: Routes = [
  {path: 'price', component: PriceComponent},
  {path: 'events', component: EventsComponent},
  {path: 'info', component: InfoComponent},
  {path: 'concact', component: ConcactComponent},
  {path: '', component: NaviComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
