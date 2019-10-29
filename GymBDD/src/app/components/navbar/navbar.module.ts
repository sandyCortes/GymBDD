import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar.component'

import { APP_ROUTING } from './../../app.routes';

@NgModule({
  declarations: [
    NavbarComponent
],
  imports: [
    NgbModule,
    APP_ROUTING
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }
