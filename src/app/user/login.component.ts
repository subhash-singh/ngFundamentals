import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: ['em { float:right; color:#E05c65; padding-left:10px;}']
})
export class LoginComponent {
    userName: any;
    password: any;
    isValid: boolean;
    mouseOverLogin: boolean;

    constructor(private authService: AuthService, private router: Router) {}

    login(formValues: any) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}

