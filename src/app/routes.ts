
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventListResolveService,
    EventsRouteActivator,
    CreateSessionComponent
} from './events/index';

import { Http404Component } from './error/http-404.component';
import { Routes } from '@angular/router';
import { UserModule } from './user/user.module';



export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent  , canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent , resolve: { events: EventListResolveService}  },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventsRouteActivator]},
    { path: 'events/session/create', component: CreateSessionComponent},
    { path: 'errorHttp404', component: Http404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
];
