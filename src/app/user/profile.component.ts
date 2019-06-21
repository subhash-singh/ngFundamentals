import { AuthService } from './auth.service';
import { Component, OnInit , Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKET } from '../common/toastrService';

@Component({
    templateUrl : './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;
    constructor(private authService: AuthService, private router: Router , @Inject(TOASTR_TOKET) private toastr: IToastr) {

    }

    ngOnInit() {
        this.firstName  =  new FormControl(this.authService.currentUser.firstName ,
            [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName  = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveProfile(profileForm) {
        if (this.profileForm.valid) {
            this.authService.updateProfile(profileForm.firstName , profileForm.lastName);
            this.toastr.success('Profile Saved');
        }
    }

    validateLastName() {
        return  this.lastName.valid || this.lastName.untouched;
    }

    validateFirstName() {
      return  this.firstName.valid || this.firstName.untouched;
    }
}
