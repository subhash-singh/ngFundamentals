import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';
import { ISession, EventsService } from '../events';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    searchTerm = '';
    foundSessions: ISession[];
    constructor(private authService: AuthService , private eventService: EventsService) {
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe( (sessions: ISession[]) => {
            this.foundSessions = sessions;
        });
    }
}
