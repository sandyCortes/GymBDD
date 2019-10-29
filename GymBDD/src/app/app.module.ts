import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from './components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { UserInformationComponent } from './dashboard/user-information/user-information.component';
import { CoachComponent } from './dashboard/coach/coach.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { MembreshipComponent } from './dashboard/membreship/membreship.component';
import { StoreComponent } from './dashboard/store/store.component';
import { CardComponent } from './dashboard/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    CoachComponent,
    ActivityComponent,
    MembreshipComponent,
    StoreComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    NavbarModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
