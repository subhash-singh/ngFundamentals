import { VoterService } from './../shared/voter.service';
import { AuthService } from './../../user/auth.service';

import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[];
    @Input() sortBy: string;

    constructor(private auth: AuthService, private voterService: VoterService) {
    }

    ngOnChanges() {
        if (this.sessions) {
           this.filterSessions(this.filterBy);
        }
        this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
            return session.level.toLowerCase() === filter;
            });
        }
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
       return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    } else if ( s1.name === s2.name ) {
        return 0;
           } else {
    return -1;
    }
}


function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}

