import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

    currentUser: IUser;
    loginUser(userName: string, pasword: string) {
        this.currentUser = {
            id: 1,
            userName: 'John Papa',
            firstName: 'John',
            lastName: 'Papa'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateProfile(firstName: string , lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
