import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './dashboard/user-information/user-information.component';
import { StoreComponent } from './dashboard/store/store.component';
import { CoachComponent } from './dashboard/coach/coach.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { CardComponent } from './dashboard/card/card.component';
import { MembreshipComponent } from './dashboard/membreship/membreship.component';

const APP_ROUTES: Routes = [
    { path: 'user', component: UserInformationComponent },
    { path: 'store', component: StoreComponent },
    { path: 'activity', component: MembreshipComponent },
    { path: 'coach', component: CoachComponent },
    { path: 'card', component: CardComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);