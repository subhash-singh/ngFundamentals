import { Injectable } from '@angular/core';
import { EventsService } from './events.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class EventsRouteActivator implements CanActivate {

    constructor(private eventService: EventsService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists) {
            this.router.navigate(['/errorHttp404']);
        }
        return eventExists;
    }
}
