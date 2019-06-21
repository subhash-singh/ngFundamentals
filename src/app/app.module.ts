
import { DurationPipe } from './events/shared/duration.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventsService,
  EventListResolveService,
  EventsRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService

} from './events/index';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Http404Component } from './error/http-404.component';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';

import {
JQ_TOKET,
TOASTR_TOKET,
IToastr,
CollapsibleWellComponent,
SimpleModalComponent,
ModalTriggerDirective
} from './common/index';

import { appRoutes } from './routes';

const toastr: IToastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    Http404Component,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective
  ],
  providers: [
    EventsService,
    { provide : TOASTR_TOKET , useValue: toastr},
    { provide : JQ_TOKET , useValue: jQuery},
    EventsRouteActivator,
    EventListResolveService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved this event, do you really want to cancel?');
  }
  return true;
}
