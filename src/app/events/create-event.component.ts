import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
    newEvent: any;
    isDirty = true;
    constructor(private router: Router, private eventService: EventsService) {

    }

    saveEvent(formValue) {
        this.eventService.saveEvent(formValue);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
